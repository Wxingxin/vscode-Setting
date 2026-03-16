# mongodb

## mongodblink

```json
"mongodblink": {
  "prefix": "mongodblink",
  "body": [
    "// lib/db.ts",
    "//Mongoclient：MongoDB 客户端(负责连接)",
    "// Db：某一个数据库实例",
    "// lib/db.ts",
    "",
    "import { Db, MongoClient } from \"mongodb\";",
    "",
    "type MongoCache = {",
    "  client: MongoClient | null;",
    "  db: Db | null;",
    "  promise: Promise<MongoClient> | null;",
    "};",
    "",
    "const globalForMongo = globalThis as typeof globalThis & {",
    "  __mongoCache?: MongoCache;",
    "};",
    "",
    "const mongoCache: MongoCache = globalForMongo.__mongoCache ?? {",
    "  client: null,",
    "  db: null,",
    "  promise: null,",
    "};",
    "",
    "globalForMongo.__mongoCache = mongoCache;",
    "",
    "export async function getMongoDb(): Promise<Db> {",
    "  if (mongoCache.db) {",
    "    return mongoCache.db;",
    "  }",
    "",
    "  const uri = process.env.MONGODB_URI;",
    "  const dbName = process.env.MONGODB_DB;",
    "",
    "  if (!uri) throw new Error(\"Missing MONGODB_URI\");",
    "  if (!dbName) throw new Error(\"Missing MONGODB_DB\");",
    "",
    "  if (!mongoCache.client) {",
    "    mongoCache.client = new MongoClient(uri);",
    "  }",
    "",
    "  if (!mongoCache.promise) {",
    "    mongoCache.promise = mongoCache.client.connect();",
    "  }",
    "",
    "  const client = await mongoCache.promise;",
    "",
    "  mongoCache.db = client.db(dbName);",
    "",
    "  return mongoCache.db;",
    "}"
  ],
  "description": "linkmongodb"
},
```

## mongodbcollection

```json
"mongodbaddcol": {
  "prefix": "mongodbaddcol",
  "body": [
    "// 消息文档的基础结构，对应 MongoDB 中 messages 集合的数据格式。",
    "type xxxDoc  = {",
    "",
    "};",
    "",
    "// 返回强类型的消息集合，供 API 路由直接执行 insert/find 等操作。",
    "export async function messagesCollection(): Promise<Collection<xxxDoc>> {",
    "  const db = await getMongoDb();",
    "",
    "  //链接指定集合，修改为自己的collectionName",
    "  const collectionName = process.env.",
    "",
    "  if (!collectionName) {",
    "    throw new Error(\"Missing MONGODB_COLLECTION_MESSAGES\");",
    "  }",
    "",
    "  return db.collection<MessageDoc>(collectionName);",
    "}"
  ],
  "description": "mondbcollection"
},
```

## mongodbaddcolneed

```json
"mongodbaddcolneed": {
  "prefix": "mongodbaddcolneed",
  "body": [
    "import { getMongoDb } from \"@/lib/db\";",
    "import { Collection } from \"mongodb\";"
  ],
  "description": "mongodbcollectionneed"
},
```

```json
"only": {
		"prefix": "q;",
		"body": [
			"` $1 `"
		],
		"description": "only"
	},
```
