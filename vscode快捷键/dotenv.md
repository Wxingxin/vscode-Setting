# dotenv

## mongodb

```json
"dotenvmongodb": {
  "prefix": "dotenvmongodb",
  "body": [
    "# mongodb",
    "MONGODB_URI=mongodb://127.0.0.1:27017",
    "MONGODB_NAME= #使用的数据库名称，如果数据库不存在，MongoDB 会自动创建",
    "MONGODB_COLLECTION_=",
    ""
  ],
  "description": "dotenvmongodb"
},
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
