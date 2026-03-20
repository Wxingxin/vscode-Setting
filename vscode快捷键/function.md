```js
function a() {}
async function aa() {}

() => {};
async () => {};

const c = function () {};
const cc = async function () {};

const b = () => {};
const bb = async () => {};
```

# 🎃🎃🎃 全部

```json
"fun": {
  "prefix": "fun",
  "body": [
    "function $1($2) {$3}"
  ],
  "description": "fun"
},
"funas": {
  "prefix": "funas",
  "body": [
    "async function $1($2) {$3}"
  ],
  "description": "funas"
},
"funnonamearr": {
  "prefix": "funnonamearr",
  "body": [
    "($1) => {$2};"
  ],
  "description": "funnonamearr"
},
"funnonamearras": {
  "prefix": "funnonamearras",
  "body": [
    "async ($1) => {$2};"
  ],
  "description": "funnonamearras"
},
"funcn": {
  "prefix": "funcn",
  "body": [
    "const $1 = function ($2) {$3}",
    ""
  ],
  "description": "funcn"
},
"funcnas": {
  "prefix": "funcnas",
  "body": [
    "const $1 = async function ($2) {$3}",
    ""
  ],
  "description": "funcnas"
},
"funcnarr": {
  "prefix": "funcnarr",
  "body": [
    "const $1 = ($2) => {$3}",
    ""
  ],
  "description": "funcnarr"
},
"funcnarras": {
  "prefix": "funcnarras",
  "body": [
    "const $1 = async ($2) => {$3}",
    ""
  ],
  "description": "funcnarras"
},
"nextjsroutefun": {
  "prefix": "nextjsroutefun",
  "body": [
    "export async function $1(request: Request) {",
    "  try {",
    "    $3",
    "  } catch (error) {",
    "    return NextResponse.json({ message: \"$2\" }, { status: 500 });",
    "  }",
    "}",
    ""
  ],
  "description": "nextjsfunroute"
},
"nextjsroutereturn": {
  "prefix": "nextjsroutereturn",
  "body": [
    "return NextResponse.json($1);",
    ""
  ],
  "description": "nextjsroutereturn"
},
```

# function 相关

## function a

```json
"fun": {
  "prefix": "fun",
  "body": [
    "function $1($2) {$3}"
  ],
  "description": "fun"
},
```

## async function a

```json
"funas": {
  "prefix": "funas",
  "body": [
    "async function $1($2) {$3}"
  ],
  "description": "funas"
},
```

# function 匿名函数

```json
"funnonamearr": {
  "prefix": "funnonamearr",
  "body": [
    "($1) => {$2};"
  ],
  "description": "funnonamearr"
},
```

```json
"funnonamearras": {
  "prefix": "funnonamearras",
  "body": [
    "async ($1) => {$2};"
  ],
  "description": "funnonamearras"
},
```

# function cn函数

```json
"funcn": {
  "prefix": "funcn",
  "body": [
    "const $1 = function ($2) {$3}",
    ""
  ],
  "description": "funcn"
},
```

```json
"funcnas": {
  "prefix": "funcnas",
  "body": [
    "const $1 = async function ($2) {$3}",
    ""
  ],
  "description": "funcnas"
},
```

# function cn arr函数

```json
"funcnarr": {
  "prefix": "funcnarr",
  "body": [
    "const $1 = ($2) => {$3}",
    ""
  ],
  "description": "funcnarr"
},
```

```json
"funcnarras": {
  "prefix": "funcnarras",
  "body": [
    "const $1 = async ($2) => {$3}",
    ""
  ],
  "description": "funcnarras"
},
```
