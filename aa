下面我**按「Mac + 前端 / RN / Node 开发者」视角**，帮你系统设计一套 **VS Code Toggle Zen Mode（禅模式）** 的**完整配置方案**，包含：

* Zen Mode 是什么、适合什么场景
* Mac 上如何进入 / 退出
* **Zen Mode 全量配置项大全（settings.json）**
* 一套**我推荐的“深度专注开发”配置模板**
* 常见问题 & 进阶技巧

---

## 一、Zen Mode 是什么（准确定位）

> **Zen Mode = 极简专注编辑模式**

它会在你按下快捷键时：

* 隐藏侧边栏 / 状态栏 / 面板
* 让代码几乎“全屏 + 无干扰”
* 非常适合 **写核心代码 / 重构 / 阅读源码**

📌 它不是 Full Screen，但**可以叠加 Full Screen**

---

## 二、Mac 中如何开启 / 退出 Zen Mode

### ✅ 默认快捷键（Mac）

```text
⌘ + K → Z
```

（先按 ⌘K，松开，再按 Z）

📌 再按一次即可退出

---

### ✅ 命令面板方式

```text
⌘ + Shift + P
Toggle Zen Mode
```

---

## 三、Zen Mode 能控制什么？（能力全览）

Zen Mode 实际控制的是 **VS Code UI 的可见性 + 行为**：

* Side Bar（资源管理器）
* Panel（Terminal / Problems / Output）
* Status Bar
* Activity Bar
* Tab Bar
* 行号、迷你地图
* 是否全屏
* 是否居中布局

---

## 四、Zen Mode 配置项大全（核心部分）

> 所有配置都在 `settings.json`

### 1️⃣ Zen Mode 总开关配置

```json
{
  "zenMode.fullScreen": false,
  "zenMode.centerLayout": true,
  "zenMode.hideTabs": true,
  "zenMode.hideStatusBar": true,
  "zenMode.hideActivityBar": true,
  "zenMode.hideLineNumbers": false,
  "zenMode.hideMinimap": true
}
```

---

### 2️⃣ 每一项配置的**精确说明**

#### `zenMode.fullScreen`

```json
"zenMode.fullScreen": true
```

* 是否进入 **macOS 全屏**
* true：完全沉浸
* false：窗口最大化但非系统全屏

📌 **建议：false（更灵活）**

---

#### `zenMode.centerLayout`

```json
"zenMode.centerLayout": true
```

* 编辑器居中
* 两侧留空（阅读/写代码更舒服）

📌 **强烈推荐开启**

---

#### `zenMode.hideTabs`

```json
"zenMode.hideTabs": true
```

* 隐藏顶部 Tab 栏
* 适合“只专注当前文件”

---

#### `zenMode.hideStatusBar`

```json
"zenMode.hideStatusBar": true
```

* 隐藏底部状态栏（Git / 行号 / 编码）

---

#### `zenMode.hideActivityBar`

```json
"zenMode.hideActivityBar": true
```

* 隐藏左侧最左边图标栏（Explorer / Git / Debug）

---

#### `zenMode.hideLineNumbers`

```json
"zenMode.hideLineNumbers": false
```

* 是否隐藏行号
* 写业务代码建议保留
* 阅读源码可关

---

#### `zenMode.hideMinimap`

```json
"zenMode.hideMinimap": true
```

* 关闭右侧代码缩略图
* 专注模式下 **强烈推荐关**

---

## 五、Zen Mode + 编辑器相关联配置（非常重要）

Zen Mode 不会自动控制这些，但**配合使用体验会明显提升**

---

### 1️⃣ 关闭多余 UI（非 Zen 专属）

```json
{
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false,
  "workbench.statusBar.visible": true,
  "editor.renderLineHighlight": "gutter"
}
```

---

### 2️⃣ 居中布局宽度（阅读友好）

```json
{
  "editor.maxWidth": 900
}
```

📌 类似 Notion / Medium 的阅读体验
📌 非常适合 TS / 源码阅读

---

### 3️⃣ 字体与行距（Zen 模式黄金组合）

```json
{
  "editor.fontSize": 15,
  "editor.lineHeight": 26,
  "editor.fontFamily": "JetBrains Mono"
}
```

---

## 六、我给你设计的一套【Mac · 深度专注 Zen Mode 方案】

### ✅ 适合你（前端 / RN / Node / TS）

```json
{
  // ===== Zen Mode =====
  "zenMode.fullScreen": false,
  "zenMode.centerLayout": true,
  "zenMode.hideTabs": true,
  "zenMode.hideStatusBar": true,
  "zenMode.hideActivityBar": true,
  "zenMode.hideLineNumbers": false,
  "zenMode.hideMinimap": true,

  // ===== Editor =====
  "editor.minimap.enabled": false,
  "editor.lineNumbers": "on",
  "editor.renderLineHighlight": "all",
  "editor.maxWidth": 960,

  // ===== Layout =====
  "breadcrumbs.enabled": false,
  "workbench.statusBar.visible": true
}
```

📌 效果总结：

* 一个文件
* 一个中心视野
* 无杂音 UI
* 极适合写复杂逻辑 / 重构 / Debug

---

## 七、Zen Mode 高频使用技巧（Mac）

### 1️⃣ Zen Mode + Terminal

Zen Mode 默认会隐藏 Terminal
👉 **按一次**：

```text
⌘ + `
```

可临时呼出 Terminal，不影响 Zen 状态

---

### 2️⃣ Zen Mode + Full Screen（叠加）

```text
Ctrl + ⌘ + F   （macOS 全屏）
⌘ + K → Z     （Zen Mode）
```

📌 **极致沉浸**

---

### 3️⃣ 快速切文件（无 Tab）

* `⌘ + P`：文件跳转（Zen 下必备）
* `⌘ + Shift + O`：符号跳转
* `⌘ + T`：工作区符号

---

## 八、Zen Mode 适合 / 不适合的场景

### ✅ 适合

* 写核心逻辑
* 重构
* 看源码
* 写文档 / MDX

### ❌ 不适合

* 多文件频繁切换
* Git 操作
* 拖拽文件结构

---

## 九、一句话总结

> **Zen Mode 是“深度专注的工作态”，不是日常态。**

* 用快捷键随进随出
* 配好一次，长期受益
* Mac 上体验非常优秀

---

如果你愿意，我可以下一步直接帮你：

* 设计一套 **「Zen Mode + 前端 / RN 专用快捷键方案」**
* 帮你做 **Normal / Zen / Debug 三套模式切换策略**
* 或结合你现在用的 **主题 + 字体 + 图标** 做整体视觉统一

你选一个我继续给你细化。
