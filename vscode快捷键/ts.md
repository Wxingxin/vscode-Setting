## nextjslinkcolbase

```js
// lib/LinkCollection.ts
// 统一提供 messages 集合，避免在业务代码里重复读取环境变量或手写集合名。
import { getMongoDb } from "@/lib/db";
import { Collection } from "mongodb";

type CollectionDoc = {

};

// 返回强类型的消息集合，供 API 路由直接执行 insert/find 等操作。
export async function collection<Name>(): Promise<Collection<CollectionDoc>> {
  const db = await getMongoDb();

  const collectionName = process.env.MONGODB_COLLECTION_MESSAGES || "messages";

  if (!collectionName) {
    throw new Error("Missing MONGODB_COLLECTION_MESSAGES");
  }

  return db.collection<MessageDoc>(collectionName);
}
```

##

```json
"nextjslinkcol": {
  "prefix": "nextjslinkcol",
  "body": [
    "// lib/LinkCollection.ts",
    "// 统一提供 messages 集合，避免在业务代码里重复读取环境变量或手写集合名。",
    "import { getMongoDb } from \"@/lib/db\";",
    "import { Collection } from \"mongodb\";"
  ],
  "description": "nextjslinkcol"
}
```
