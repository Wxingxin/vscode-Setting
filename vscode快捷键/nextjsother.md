# 变量

## const

```json
"const ": {
  "prefix": "cn",
  "body": [
    "const $1 = $2;"
  ],
  "description": "const "
},
```

## let

```json
"let ": {
  "prefix": "lt",
  "body": [
    "let $1 = $2;"
  ],
  "description": "let "
},
```

# minio

## minio page get

```json
"nextjs minio page get": {
  "prefix": "nexminiopageget",
  "body": [
    "// 读取图片",
    "useEffect(() => {",
    "  async function loadAvatar() {",
    "    try {",
    "      // TODO: 读取图片，通过改变\"/api/user/avatar\"，获取不同图片",
    "      const res = await fetch(\"/api/user/avatar\");",
    "      const data = await res.json();",
    "",
    "      if (!res.ok) {",
    "        setMessage(data.message || \"读取头像失败\");",
    "        return;",
    "      }",
    "",
    "      // TODO: 在这里获取用户的头像， 使用setAvatar(useState)",
    "      setAvatar(data.avatar);",
    "    } catch (error) {",
    "      console.error(error);",
    "      setMessage(\"读取头像失败\");",
    "    } finally {",
    "      setLoadingProfile(false);",
    "    }",
    "  }",
    "",
    "  loadAvatar();",
    "}, []);",
    ""
  ],
  "description": "nextjs minio page get"
}
```

## minio page upload

```json
"nextjs minio page post": {
  "prefix": "nexminiopagepost",
  "body": [
    "async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {",
    "    const file = event.target.files?.[0];",
    "    if (!file) return;",
    "",
    "    setUploading(true);",
    "    setMessage(\"\");",
    "",
    "    try {",
    "      const formData = new FormData();",
    "      formData.append(\"file\", file);",
    "      //TODO: \"在minio中上传图片\"，改变\"/api/upload/avatar\"",
    "      const uploadRes = await fetch(\"/api/upload/avatar\", {",
    "        method: \"POST\",",
    "        body: formData,",
    "      });",
    "",
    "      const uploadData = await uploadRes.json();",
    "",
    "      if (!uploadRes.ok) {",
    "        setMessage(uploadData.message || \"上传头像失败\");",
    "        return;",
    "      }",
    "      //TODO: \"将图片中保存在mongodb中\"， 改变\"/api/user/avatar\"",
    "      const saveRes = await fetch(\"/api/user/avatar\", {",
    "        method: \"PATCH\",",
    "        headers: {",
    "          \"Content-Type\": \"application/json\",",
    "        },",
    "        body: JSON.stringify(uploadData.avatar),",
    "      });",
    "",
    "      const saveData = await saveRes.json();",
    "",
    "      if (!saveRes.ok) {",
    "        setMessage(saveData.message || \"保存头像失败\");",
    "        return;",
    "      }",
    "",
    "      setAvatar(saveData.avatar);",
    "      setMessage(\"头像更新成功\");",
    "    } catch (error) {",
    "      console.error(error);",
    "      setMessage(\"上传过程中发生错误\");",
    "    } finally {",
    "      setUploading(false);",
    "      event.target.value = \"\";",
    "    }",
    "  }"
  ],
  "description": "nextjs minio page post"
},
```

## minio upload avatar

```json

```
