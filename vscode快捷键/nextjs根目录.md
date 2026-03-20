# dotenv

## minio

```json
"dotenvminio": {
  "prefix": "dotenvminio",
  "body": [
    "# minio npm i minio",
    "MINIO_ENDPOINT=127.0.0.1 # MinlO 服务地址 (如 127.0.0.1)",
    "MINIO_PORT=9000 # 默认端口",
    "MINIO_USE_SSL=false # 是否使用 https",
    "MINIO_ACCESS_KEY=minioadmin # 账号",
    "MINIO_SECRET_KEY=minioadmin # 密码",
    "MINIO_BUCKET=${1:🎃🎃🎃} # 存储桶名称",
    "MINIO_PUBLIC_ENDPOINT=127.0.0.1:9000 # 公开访问地址",
    ""
  ],
  "description": "dotenvminio"
},
```

## mongodb

```json
"dotenvmongodb": {
  "prefix": "dotenvmongodb",
  "body": [
    "# mongodb npm i mongoose",
    "MONGODB_URI=mongodb://127.0.0.1:27017",
    "MONGODB_DB=${1:🎃🎃🎃} #使用的数据库名称，如果数据库不存在，MongoDB 会自动创建",
    ""
  ],
  "description": "dotenvmongodb"
},
```

### dotenvmongodbadd

```json
"dotenvmongodbadd": {
  "prefix": "dotenvmongodbadd",
  "body": [
    "MONGODB_COLLECTION_XXX=xxx"
  ],
  "description": "dotenvmongodbadd"
}
```

## jose

```json
"dotenvjose": {
  "prefix": "dotenvjose",
  "body": [
    "# jose npm i jose",
    "SECRET_KEY=10 #服务器用于加密和验证 Token 的密钥",
    ""
  ],
  "description": "dotenvjose"
},
```

## bcrypt

```json
"dotenvbcrypt": {
  "prefix": "dotenvbcrypt",
  "body": [
    "# bcrpyt npm i bcrypt",
    " npm i -D @types/bcrypt",
    "SALT_ROUNDS=10 # 加密强度",
    ""
  ],
  "description": "dotenvbcrypt"
},
```

## email

```json
"dotenvemail": {
  "prefix": "dotenvemail",
  "body": [
    "# email SMTP(QQ) npm i nodemailer",
    "SMTP_HOST=smtp.qq.com #SMTP 服务器地址",
    "SMTP_PORT=465 #465 = SSL加密",
    "SMTP_SECURE=true #true 表示使用 SSL",
    "SMTP_USER=${1:🎃🎃🎃} #发送信息的邮件",
    "SMTP_PASS=${2:🎃🎃🎃}  #邮件授权码",
    "MAIL_FORM_NAME=${3:🎃🎃🎃}  #用户收到邮件时显示的发件人名字"
  ],
  "description": "dotenvemail"
},
```

# proxy

```json
"nextjs proxy": {
  "prefix": "nexproxy",
  "body": [
    "// proxy.ts (或 middleware.ts)",
    "import { NextRequest, NextResponse } from \"next/server\";",
    "import { verifyToken } from \"@/lib/auth\";",
    "",
    "/**",
    " *  可配置项",
    " */",
    "// 登录才能访问",
    "//TODO: const PROTECTED_PATHS = [\"/profile\", \"/admin\"]; ",
    "const PROTECTED_PATHS = [${1:🎃🎃🎃}];",
    "// 登录后不允许访问",
    "//TODO: const PUBLIC_ONLY_PATHS = [\"/login\", \"/register\"]; ",
    "const PUBLIC_ONLY_PATHS = [${2:🎃🎃🎃}]; ",
    "",
    "/**",
    " *  工具函数：是否匹配路径",
    " */",
    "function matchPath(pathname: string, paths: string[]) {",
    "  return paths.some((path) => pathname.startsWith(path));",
    "}",
    "",
    "/**",
    " *  主逻辑",
    " */",
    "export async function proxy(request: NextRequest) {",
    "  const { pathname } = request.nextUrl;",
    "  const token = request.cookies.get(\"token\")?.value;",
    "",
    "  const isProtected = matchPath(pathname, PROTECTED_PATHS);",
    "  const isPublicOnly = matchPath(pathname, PUBLIC_ONLY_PATHS);",
    "",
    "  // ===== 1. 不需要处理 =====",
    "  if (!isProtected && !isPublicOnly) {",
    "    return NextResponse.next();",
    "  }",
    "",
    "  // ===== 2. 未登录访问受保护页面 =====",
    "  if (isProtected && !token) {",
    "    //TODO:如果没有登录访问受保护页面, 跳转到哪里",
    "    //TODO: return NextResponse.redirect(new URL(\"/login\", request.url));",
    "    return NextResponse.redirect(new URL(\"/${3:🎃🎃🎃}\", request.url));",
    "  }",
    "",
    "  try {",
    "    // ===== 3. 验证 token =====",
    "    const payload = token ? await verifyToken(token) : null;",
    "",
    "    // ===== 4. 登录用户访问 login/register,, 跳转到哪里 =====",
    "    if (isPublicOnly && payload) {",
    "      //TODO:如果登录用户访问, 跳转到哪里",
    "      //TODO: return NextResponse.redirect(new URL(\"/\", request.url));",
    "      return NextResponse.redirect(new URL(\"/${4:🎃🎃🎃}\", request.url));",
    "    }",
    "",
    "    // ===== 5. 权限控制（可扩展）=====",
    "    // if (pathname.startsWith(\"/admin\") && payload?.role !== \"admin\") {",
    "    //   return NextResponse.redirect(new URL(\"/403\", request.url));",
    "    // }",
    "",
    "    return NextResponse.next();",
    "  } catch (error) {",
    "    // ===== 6. token 失效, 跳转到登录 =====",
    "    //TODO:如果token失效, 跳转到哪里",
    "    //TODO: return NextResponse.redirect(new URL(\"/login\", request.url));",
    "    return NextResponse.redirect(new URL(\"/${5:🎃🎃🎃}\", request.url));",
    "  }",
    "}",
    "",
    "/**",
    " *  matcher：控制拦截范围",
    " */",
    "export const config = {",
    "  //TODO:",
    "  // matcher: [",
    "  //   \"/profile/:path*\",",
    "  //   \"/admin/:path*\",",
    "  //   \"/login\",",
    "  //   \"/register\",",
    "  // ],",
    "  matcher: [",
    "   \"${6:🎃🎃🎃}\"",
    "  ],",
    "};"
  ],
  "description": "nextjs proxy"
},
```

# 🎃🎃🎃 总结

```json
"dotenvminio": {
  "prefix": "dotenvminio",
  "body": [
    "# minio npm i minio",
    "MINIO_ENDPOINT=127.0.0.1 # MinlO 服务地址 (如 127.0.0.1)",
    "MINIO_PORT=9000 # 默认端口",
    "MINIO_USE_SSL=false # 是否使用 https",
    "MINIO_ACCESS_KEY=minioadmin # 账号",
    "MINIO_SECRET_KEY=minioadmin # 密码",
    "MINIO_BUCKET=${1:🎃🎃🎃} # 存储桶名称",
    "MINIO_PUBLIC_ENDPOINT=127.0.0.1:9000 # 公开访问地址",
    ""
  ],
  "description": "dotenvminio"
},
"dotenvmongodb": {
  "prefix": "dotenvmongodb",
  "body": [
    "# mongodb npm i mongoose",
    "MONGODB_URI=mongodb://127.0.0.1:27017",
    "MONGODB_DB=${1:🎃🎃🎃} #使用的数据库名称，如果数据库不存在，MongoDB 会自动创建",
    ""
  ],
  "description": "dotenvmongodb"
},
"dotenvmongodbadd": {
  "prefix": "dotenvmongodbadd",
  "body": [
    "MONGODB_COLLECTION_XXX=xxx"
  ],
  "description": "dotenvmongodbadd"
},
"dotenvjose": {
  "prefix": "dotenvjose",
  "body": [
    "# jose npm i jose",
    "SECRET_KEY=10 #服务器用于加密和验证 Token 的密钥",
    ""
  ],
  "description": "dotenvjose"
},
"dotenvbcrypt": {
  "prefix": "dotenvbcrypt",
  "body": [
    "# bcrpyt npm i bcrypt",
    " npm i -D @types/bcrypt",
    "SALT_ROUNDS=10 # 加密强度",
    ""
  ],
  "description": "dotenvbcrypt"
},
"dotenvemail": {
  "prefix": "dotenvemail",
  "body": [
    "# email SMTP(QQ) npm i nodemailer",
    "SMTP_HOST=smtp.qq.com #SMTP 服务器地址",
    "SMTP_PORT=465 #465 = SSL加密",
    "SMTP_SECURE=true #true 表示使用 SSL",
    "SMTP_USER=${1:🎃🎃🎃} #发送信息的邮件",
    "SMTP_PASS=${2:🎃🎃🎃}  #邮件授权码",
    "MAIL_FORM_NAME=${3:🎃🎃🎃}  #用户收到邮件时显示的发件人名字"
  ],
  "description": "dotenvemail"
},
"nextjs proxy": {
  "prefix": "nexproxy",
  "body": [
    "// proxy.ts (或 middleware.ts)",
    "import { NextRequest, NextResponse } from \"next/server\";",
    "import { verifyToken } from \"@/lib/auth\";",
    "",
    "/**",
    " *  可配置项",
    " */",
    "// 登录才能访问",
    "//TODO: const PROTECTED_PATHS = [\"/profile\", \"/admin\"]; ",
    "const PROTECTED_PATHS = [${1:🎃🎃🎃}];",
    "// 登录后不允许访问",
    "//TODO: const PUBLIC_ONLY_PATHS = [\"/login\", \"/register\"]; ",
    "const PUBLIC_ONLY_PATHS = [${2:🎃🎃🎃}]; ",
    "",
    "/**",
    " *  工具函数：是否匹配路径",
    " */",
    "function matchPath(pathname: string, paths: string[]) {",
    "  return paths.some((path) => pathname.startsWith(path));",
    "}",
    "",
    "/**",
    " *  主逻辑",
    " */",
    "export async function proxy(request: NextRequest) {",
    "  const { pathname } = request.nextUrl;",
    "  const token = request.cookies.get(\"token\")?.value;",
    "",
    "  const isProtected = matchPath(pathname, PROTECTED_PATHS);",
    "  const isPublicOnly = matchPath(pathname, PUBLIC_ONLY_PATHS);",
    "",
    "  // ===== 1. 不需要处理 =====",
    "  if (!isProtected && !isPublicOnly) {",
    "    return NextResponse.next();",
    "  }",
    "",
    "  // ===== 2. 未登录访问受保护页面 =====",
    "  if (isProtected && !token) {",
    "    //TODO:如果没有登录访问受保护页面, 跳转到哪里",
    "    //TODO: return NextResponse.redirect(new URL(\"/login\", request.url));",
    "    return NextResponse.redirect(new URL(\"/${3:🎃🎃🎃}\", request.url));",
    "  }",
    "",
    "  try {",
    "    // ===== 3. 验证 token =====",
    "    const payload = token ? await verifyToken(token) : null;",
    "",
    "    // ===== 4. 登录用户访问 login/register,, 跳转到哪里 =====",
    "    if (isPublicOnly && payload) {",
    "      //TODO:如果登录用户访问, 跳转到哪里",
    "      //TODO: return NextResponse.redirect(new URL(\"/\", request.url));",
    "      return NextResponse.redirect(new URL(\"/${4:🎃🎃🎃}\", request.url));",
    "    }",
    "",
    "    // ===== 5. 权限控制（可扩展）=====",
    "    // if (pathname.startsWith(\"/admin\") && payload?.role !== \"admin\") {",
    "    //   return NextResponse.redirect(new URL(\"/403\", request.url));",
    "    // }",
    "",
    "    return NextResponse.next();",
    "  } catch (error) {",
    "    // ===== 6. token 失效, 跳转到登录 =====",
    "    //TODO:如果token失效, 跳转到哪里",
    "    //TODO: return NextResponse.redirect(new URL(\"/login\", request.url));",
    "    return NextResponse.redirect(new URL(\"/${5:🎃🎃🎃}\", request.url));",
    "  }",
    "}",
    "",
    "/**",
    " *  matcher：控制拦截范围",
    " */",
    "export const config = {",
    "  //TODO:",
    "  // matcher: [",
    "  //   \"/profile/:path*\",",
    "  //   \"/admin/:path*\",",
    "  //   \"/login\",",
    "  //   \"/register\",",
    "  // ],",
    "  matcher: [",
    "   \"${6:🎃🎃🎃}\"",
    "  ],",
    "};"
  ],
  "description": "nextjs proxy"
},
```
