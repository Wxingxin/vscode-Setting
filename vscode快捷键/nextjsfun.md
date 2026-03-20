# nextjsfun

## next route 路由

```json
"nextjs route function": {
  "prefix": "nexroutefun",
  "body": [
    "export async function ${1:GET}(request: NextRequest) {",
    "  try {",
    "    ${4}",
    "  } catch (error) {",
    "    console.error(error);",
    "    return NextResponse.json({ message: \"${2:error}\", ok: ${3: false} }, { status: 500 });",
    "  }",
    "}"
  ],
  "description": "nextjs route function"
},
```

# fetch

## fetch get

```json
{
  "nex fetch get": {
    "prefix": "nexfetchget",
    "body": [
      "const result = await fetch(\"${1:/api/xxx}\", {",
      " method: \"GET\",",
      "});",
      "",
      "const data = await result.json();"
    ],
    "description": "next fetch GET"
  }
},
```

## fetch post

```json
{
  "nex fetch post": {
    "prefix": "nexfetchpost",
    "body": [
      "const result = await fetch(\"${1:/api/xxx}\", {",
      "  method: \"POST\",",
      "  headers: {",
      "    \"Content-Type\": \"application/json\",",
      "  },",
      "  body: JSON.stringify(${2:{}}),",
      "});",
      "",
      "const data = await result.json();"
    ],
    "description": "next fetch POST"
  }
},
```
