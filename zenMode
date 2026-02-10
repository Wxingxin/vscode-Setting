下面把 **VS Code 的 Zen Mode（禅模式）**给你**从“会用 → 会配 → 会定制”一次讲清楚**，都是**实际可用配置**。

---

## 一、什么是 Zen Mode（先明确）

> **Zen Mode = 极简专注写代码模式**

默认会：

* 隐藏侧边栏
* 隐藏状态栏
* 隐藏活动栏
* 隐藏面板（Terminal / Problems）
* 居中编辑器

---

## 二、如何进入 / 退出 Zen Mode

### ⌨️ 快捷键（最常用）

```txt
Ctrl + K Z
```

> 再按 **Esc Esc** 退出

---

### 🧭 命令面板

```
Ctrl + Shift + P
View: Toggle Zen Mode
```

---

## 三、Zen Mode 核心配置（重点）

打开：

```
Ctrl + Shift + P
Preferences: Open Settings (JSON)
```

---

### ✅ 最常用 Zen Mode 配置模板（推荐直接用）

```json
{
  "zenMode.hideStatusBar": true,
  "zenMode.hideTabs": false,
  "zenMode.hideActivityBar": true,
  "zenMode.hideLineNumbers": false,
  "zenMode.centerLayout": true,
  "zenMode.fullScreen": false,
  "zenMode.restore": true
}
```

---

## 四、每个配置项的作用（你要记住这几个）

| 配置项                       | 作用          |
| ------------------------- | ----------- |
| `zenMode.hideStatusBar`   | 隐藏底部状态栏     |
| `zenMode.hideTabs`        | 隐藏文件 Tab    |
| `zenMode.hideActivityBar` | 隐藏左侧活动栏     |
| `zenMode.hideLineNumbers` | 隐藏行号        |
| `zenMode.centerLayout`    | 编辑器居中（强烈推荐） |
| `zenMode.fullScreen`      | 进入全屏        |
| `zenMode.restore`         | 退出后恢复之前布局   |

---

## 五、Zen Mode + 编辑器宽度（强烈建议一起用）

Zen Mode **默认会撑满屏**，很多人觉得难看。

### ✅ 限制最大宽度（非常重要）

```json
{
  "editor.maxWidth": 100,
  "editor.wordWrap": "on"
}
```

📌 效果：

* 代码居中
* 类似 Notion / Medium 写作体验
* 对 Markdown / React 特别友好

---

## 六、Zen Mode + 专注写代码推荐组合

```json
{
  "zenMode.hideStatusBar": true,
  "zenMode.hideActivityBar": true,
  "zenMode.hideTabs": true,
  "zenMode.centerLayout": true,

  "editor.lineHeight": 28,
  "editor.fontSize": 16,
  "editor.cursorBlinking": "smooth",
  "editor.renderLineHighlight": "all",
  "editor.minimap.enabled": false
}
```

---

## 七、只在 Zen Mode 生效？❌（VS Code 的限制）

> ⚠️ VS Code **不支持“只在 Zen Mode 生效”的 editor 配置**

### 变通方案（高级）

* 用 **Profile（配置文件）**
* 或写 **扩展监听 Zen Mode 状态**

### 推荐：Profile 方案

```
Manage Profiles → Create Profile → Zen
```

---

## 八、Zen Mode 常见问题

### ❓ 退出不了怎么办？

👉 连按两次 `Esc`

---

### ❓ Zen Mode 没隐藏某些栏？

* 检查是否被插件强制显示
* 确认 `zenMode.restore: true`

---

### ❓ 我想保留 Terminal？

> Zen Mode **强制隐藏 Panel**
> 👉 推荐用 `Ctrl + ` 临时打开

---

## 九、我给你的「最佳实践总结」

> **真正好用的 Zen Mode = 3 件套**

1️⃣ `Ctrl + K Z`
2️⃣ `editor.maxWidth` 限宽
3️⃣ `centerLayout` 居中

---

## 🔥 如果你愿意，我可以直接帮你：

* 给你一套 **写代码 / 写 Markdown 的 Zen Mode 专用配置**
* 帮你做一个 **Zen Mode 一键切换插件**
* 把 Zen Mode 调成 **类似 Notion / Obsidian 的体验**
* 结合你之前做的 **VS Code 主题一起调**

你直接说：
👉 **“我要写代码用的”** 还是 **“我要写 Markdown 用的”**
