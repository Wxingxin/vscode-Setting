# linkcollection

## nextjslinkcolbase

```js
// lib/LinkCollection.ts
// 统一提供 messages 集合，避免在业务代码里重复读取环境变量或手写集合名。
import { getMongoDb } from "@/lib/db";
import { Collection } from "mongodb";

// FIXME: xxxCollectionDoc
type xxxCollectionDoc = {

};
// 返回强类型的消息集合，供 API 路由直接执行 insert/find 等操作。
// TODO: xxxcollection
export async function xxxcollection<Name>(): Promise<Collection<xxxCollectionDoc>> {
  const db = await getMongoDb();

  //TODO: MONGODB_COLLECTION_MESSAGES || messages
  const collectionName = process.env.MONGODB_COLLECTION_MESSAGES || "messages";

  if (!collectionName) {
    throw new Error(`Missing ${collectionName}`);
  }

  return db.collection<xxxCollectionDoc>(collectionName);
}
```

## nextjslinkcol-pro

```json
"nextjslinkcol-pro": {
  "prefix": "nextjslinkcol-pro",
  "body": [
    "// lib/LinkCollection.ts",
    "// 统一提供 messages 集合，避免在业务代码里重复读取环境变量或手写集合名。",
    "import { getMongoDb } from \"@/lib/db\";",
    "import { Collection } from \"mongodb\";"
  ],
  "description": "nextjslinkcol"
}
```

### addcol

```json

"nextjsaddcollection": {
  "prefix": "nextjsaddcollection",
  "body": [
    "// FIXME: XxxCollectionDoc * 3",
    "type XxxCollectionDoc = {};",
    "// 返回强类型的消息集合，供 API 路由直接执行 insert/find 等操作。",
    "// TODO: getXxxCollection * 1",
    "export async function getXxxCollection(): Promise<",
    "  Collection<XxxCollectionDoc>",
    "> {",
    "  const db = await getMongoDb();",
    "",
    "  //TODO: MONGODB_COLLECTION_MESSAGES * 1 || messages * 1",
    "  const collectionName = process.env.MONGODB_COLLECTION_MESSAGES || \"messages\";",
    "",
    "  if (!collectionName) {",
    "    throw new Error(`Missing ${collectionName}`);",
    "  }",
    "",
    "  return db.collection<XxxCollectionDoc>(collectionName);",
    "}",
    ""
  ],
  "description": "nextjsaddcollection"
}
```

# minio

## nextjsminio

```json
"nextjsminio": {
  "prefix": "nextjsminio",
  "body": [
    "import { Client } from \"minio\";",
    "",
    "//读取环境变量配置",
    "const endPoint = process.env.MINIO_ENDPOINT!;",
    "const port = Number(process.env.MINIO_PORT || 9000);",
    "const useSSL = process.env.MINIO_USE_SSL === \"true\";",
    "const accessKey = process.env.MINIO_ACCESS_KEY!;",
    "const secretKey = process.env.MINIO_SECRET_KEY!;",
    "export const MINIO_BUCKET = process.env.MINIO_BUCKET!;",
    "",
    "/**",
    " * 后续所有操作都基于它",
    " *",
    " *上传文件，查询 bucket，查询 bucket，设置权限",
    " */",
    "export const minioClient = new Client({",
    "  endPoint,",
    "  port,",
    "  useSSL,",
    "  accessKey,",
    "  secretKey,",
    "});",
    "",
    "/**",
    " * 生成“公开读”策略；",
    " *",
    " * 让这个 bucket 的所有文件可以被公网访问",
    " */",
    "function getPublicReadPolicy(bucketName: string) {",
    "  return JSON.stringify({",
    "    Version: \"2012-10-17\",",
    "    Statement: [",
    "      {",
    "        Effect: \"Allow\",",
    "        Principal: {",
    "          AWS: [\"*\"],",
    "        },",
    "        Action: [\"s3:GetObject\"],",
    "        Resource: [`arn:aws:s3:::${bucketName}/*`],",
    "      },",
    "    ],",
    "  });",
    "}",
    "",
    "/**",
    " * 确保 bucket 存在 - 如果不存在，就创建它",
    " */",
    "export async function ensureBucketExists() {",
    "  const exists = await minioClient.bucketExists(MINIO_BUCKET);",
    "",
    "  if (!exists) {",
    "    await minioClient.makeBucket(MINIO_BUCKET, \"us-east-1\");",
    "  }",
    "",
    "  /**",
    "   * 👉 设置权限（非常关键）",
    "   *",
    "   * ❌ 上传成功但访问不了",
    "   * ✅ 设置后可以直接用 URL 访问图片",
    "   */",
    "  await minioClient.setBucketPolicy(",
    "    MINIO_BUCKET,",
    "    getPublicReadPolicy(MINIO_BUCKET),",
    "  );",
    "}",
    "",
    "/**",
    " * 获取文件的公共 URL",
    " *",
    " * 👉 输入：文件名（objectName）",
    " *",
    " * 👉 拼接最终访问 URL",
    " */",
    "export function getObjectPublicUrl(objectName: string) {",
    "  const protocol = useSSL ? \"https\" : \"http\";",
    "  const publicEndpoint = process.env.MINIO_PUBLIC_ENDPOINT!;",
    "",
    "  return `${protocol}://${publicEndpoint}/${MINIO_BUCKET}/${objectName}`;",
    "}",
    ""
  ],
  "description": "nextjsminio"
},
```

# 🎃🎃🎃 IMAGE UPLOAD

## nextjsminioupload

```JSON
"nextjsminioupload": {
  "prefix": "nextjsminioupload",
  "body": [
    "import { NextResponse } from \"next/server\";",
    "",
    "import { randomUUID } from \"node:crypto\";",
    "",
    "import {",
    "  ensureBucketExists, // 确保 bucket 存在 + 设置权限",
    "  getObjectPublicUrl, // 获取文件公网访问地址",
    "  MINIO_BUCKET, // bucket 名",
    "  minioClient, // MinIO 客户端实例",
    "} from \"@/lib/minio\";",
    "",
    "export async function POST(request: Request) {",
    "  try {",
    "    // 1 基本： 确保 bucket 存在",
    "    await ensureBucketExists();",
    "",
    "    // 1 基本： 获取前端传来的 form-data",
    "    const formData = await request.formData();",
    "    const file = formData.get(\"file\");",
    "    // 前端 <input name=\"file\" />",
    "",
    "    // 2 校验：必须是文件",
    "    //TODO: \"请选择头像文件\"",
    "    if (!(file instanceof File)) {",
    "      return NextResponse.json({ message: \"请选择头像文件\" }, { status: 400 });",
    "    }",
    "",
    "    // 2校验：必须是图片",
    "    //TODO: \"头像必须是图片文件\"",
    "    if (!file.type.startsWith(\"image/\")) {",
    "      return NextResponse.json(",
    "        { message: \"头像必须是图片文件\" },",
    "        { status: 400 },",
    "      );",
    "    }",
    "",
    "    // 2 校验：不能为空",
    "    if (file.size === 0) {",
    "      return NextResponse.json({ message: \"文件不能为空\" }, { status: 400 });",
    "    }",
    "",
    "    // 2校验：限制大小（2MB）",
    "    //TODO: 2 * 1024 * 1024",
    "    if (file.size > 2 * 1024 * 1024) {",
    "      return NextResponse.json(",
    "        //TODO: \"头像不能超过 2MB\"",
    "        { message: \"头像不能超过 2MB\" },",
    "        { status: 400 },",
    "      );",
    "    }",
    "",
    "    // 3转换. File → ArrayBuffer → Buffer（MinIO需要Buffer）",
    "",
    "    const bytes = await file.arrayBuffer();",
    "    const buffer = Buffer.from(bytes);",
    "",
    "    // 4 . 获取扩展名（.png / .jpg）",
    "    const ext = file.name.includes(\".\")",
    "      ? file.name.slice(file.name.lastIndexOf(\".\")) // 从最后一个 \".\" 开始截取",
    "      : \"\";",
    "",
    "    // 5.  生成唯一文件名",
    "    // TODO: avatars",
    "    const objectName = `avatars/${randomUUID()}${ext}`;",
    "    // 示例：avatars/123e4567-e89b-12d3-a456-426614174000.png",
    "",
    "    // 6. 上传 MinIO",
    "",
    "    await minioClient.putObject(",
    "      MINIO_BUCKET, // bucket 名",
    "      objectName, // 文件路径（对象名）",
    "      buffer, // 文件内容",
    "      buffer.length, // 文件大小",
    "      {",
    "        \"Content-Type\": file.type, // 设置 MIME 类型（很重要）",
    "      },",
    "    );",
    "",
    "    // 7. 返回访问地址",
    "    const url = getObjectPublicUrl(objectName);",
    "",
    "    // 8. 返回结果",
    "    return NextResponse.json(",
    "      {",
    "        //TODO: \"头像上传成功\"",
    "        message: \"头像上传成功\",",
    "        //TODO: avatar",
    "        avatar: {",
    "          objectName, // 存储路径（用于删除/更新）",
    "          url, // 可访问 URL",
    "          contentType: file.type, // 类型",
    "          size: file.size, // 文件大小",
    "        },",
    "      },",
    "      { status: 201 }, // 创建成功",
    "    );",
    "  } catch (error) {",
    "    // ❌ 捕获异常（MinIO错误 / 网络错误等）",
    "    //TODO: \"上传头像失败\"",
    "    console.error(\"上传头像失败:\", error);",
    "    //TODO: \"上传头像失败\"",
    "    return NextResponse.json({ message: \"上传头像失败\" }, { status: 500 });",
    "  }",
    "}",
    ""
  ],
  "description": "nextjsminioupload"
}
```

## nextjsminioupload-pro

```JSON
"nextjsminiouploadpro": {
  "prefix": "nextjsminiouploadpro",
  "body": [
    "import { NextResponse } from \"next/server\";",
    "import { randomUUID } from \"node:crypto\";",
    "",
    "import {",
    "  ensureBucketExists,",
    "  getObjectPublicUrl,",
    "  MINIO_BUCKET,",
    "  minioClient,",
    "} from \"@/lib/minio\";",
    "// FIXME: 从 session 获取用户",
    "import { getSession } from \"@/lib/session\";",
    "",
    "export async function POST(request: Request) {",
    "  try {",
    "    // 1 基本： 确保 bucket 存在",
    "    await ensureBucketExists();",
    "",
    "    // 1 基本： 获取前端传来的 form-data",
    "    const formData = await request.formData();",
    "    const file = formData.get(\"file\");",
    "",
    "    // FIXME: ✅ ① 从 session 获取用户",
    "    const session = await getSession();",
    "    if (!session || !session.user?.id) {",
    "      return NextResponse.json({ message: \"未登录\" }, { status: 401 });",
    "    }",
    "    const userId = session.user.id;",
    "",
    "    //2 校验：必须是文件",
    "    //TODO: \"请选择头像文件\"",
    "    if (!(file instanceof File)) {",
    "      return NextResponse.json({ message: \"请选择封面文件\" }, { status: 400 });",
    "    }",
    "",
    "    //2 校验：必须是图片",
    "    //TODO: \"头像必须是图片文件\"",
    "    if (!file.type.startsWith(\"image/\")) {",
    "      return NextResponse.json(",
    "        { message: \"封面必须是图片文件\" },",
    "        { status: 400 },",
    "      );",
    "    }",
    "",
    "    //2 校验：不能为空",
    "    if (file.size === 0) {",
    "      return NextResponse.json({ message: \"文件不能为空\" }, { status: 400 });",
    "    }",
    "",
    "    // 2 校验：限制大小（2MB）",
    "    //TODO: 2 * 1024 * 1024",
    "    if (file.size > 5 * 1024 * 1024) {",
    "      return NextResponse.json(",
    "        //TODO: \"头像不能超过 2MB\"",
    "        { message: \"封面不能超过 5MB\" },",
    "        { status: 400 },",
    "      );",
    "    }",
    "",
    "    // 3转换. File → ArrayBuffer → Buffer（MinIO需要Buffer）",
    "    const bytes = await file.arrayBuffer();",
    "    const buffer = Buffer.from(bytes);",
    "",
    "    // 4 . 获取扩展名（.png / .jpg）",
    "    const ext = file.name.includes(\".\")",
    "      ? file.name.slice(file.name.lastIndexOf(\".\"))",
    "      : \"\";",
    "",
    "    // 5. 按用户分目录 生成唯一文件名",
    "    // TODO: avatars",
    "    const objectName = `covers/${userId}/${randomUUID()}${ext}`;",
    "",
    "    // 6. 上传 MinIO",
    "    await minioClient.putObject(",
    "      MINIO_BUCKET,",
    "      objectName,",
    "      buffer,",
    "      buffer.length,",
    "      {",
    "        \"Content-Type\": file.type,",
    "      },",
    "    );",
    "",
    "    // 7. 返回访问地址",
    "    const url = getObjectPublicUrl(objectName);",
    "",
    "    // 8. 返回结果",
    "    return NextResponse.json(",
    "      {",
    "        //TODO: \"头像上传成功\"",
    "        message: \"封面上传成功\",",
    "        //TODO: avatar",
    "        coverImage: {",
    "          objectName,",
    "          url,",
    "          contentType: file.type,",
    "          size: file.size,",
    "          userId: userId,",
    "        },",
    "      },",
    "      { status: 201 },",
    "    );",
    "  } catch (error) {",
    "    // ❌ 捕获异常（MinIO错误 / 网络错误等）",
    "    //TODO: \"上传封面失败\"",
    "    console.error(\"上传封面失败:\", error);",
    "    //TODO: \"上传封面失败\"",
    "    return NextResponse.json({ message: \"上传封面失败\" }, { status: 500 });",
    "  }",
    "}",
    ""
  ],
  "description": "nextjsminiouploadpro"
},
```
