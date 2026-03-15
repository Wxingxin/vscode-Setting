// 消息文档的基础结构，对应 MongoDB 中 messages 集合的数据格式。
type xxxDoc  = {

};

// 返回强类型的消息集合，供 API 路由直接执行 insert/find 等操作。
export async function messagesCollection(): Promise<Collection<xxxDoc>> {
  const db = await getMongoDb();

  //链接指定集合，修改为自己的collectionName
  const collectionName = process.env.

  if (!collectionName) {
    throw new Error("Missing MONGODB_COLLECTION_MESSAGES");
  }

  return db.collection<MessageDoc>(collectionName);
}