# dotenv

# minio

```json
"dotenvminio": {
  "prefix": "dotenvminio",
  "body": [
    "# minio",
    "MINIO_ENDPOINT=127.0.0.1 # MinlO 服务地址 (如 127.0.0.1)",
    "MINIO_PORT=9000 # 默认端口",
    "MINIO_USE_SSL=false # 是否使用 https",
    "MINIO_ACCESS_KEY=minioadmin # 账号",
    "MINIO_SECRET_KEY=minioadmin # 密码",
    "MINIO_BUCKET=🎃🎃🎃 # 存储桶名称",
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
    "# mongodb",
    "MONGODB_URI=mongodb://127.0.0.1:27017",
    "MONGODB_DB=$1 #使用的数据库名称，如果数据库不存在，MongoDB 会自动创建",
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
    "# jose",
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
    "# bcrpyt",
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
    "# email SMTP(QQ)",
    "SMTP_HOST=smtp.qq.com #SMTP 服务器地址",
    "SMTP_PORT=465 #465 = SSL加密",
    "SMTP_SECURE=true #true 表示使用 SSL",
    "SMTP_USER= #发送信息的邮件",
    "SMTP_PASS=  #邮件授权码",
    "MAIL_FORM_NAME=  #用户收到邮件时显示的发件人名字"
  ],
  "description": "dotenvemail"
},
```
