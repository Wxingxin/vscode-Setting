在 VS Code 中，你看到的「虚线」通常是一些**辅助线**或**视觉提示线**，用于帮助你更好地对齐、区分层级或嵌套结构。它们来自不同的功能或扩展。下面我给你详细分类讲一下各种虚线的来源和设置方式 👇

---

## 🧩 一、缩进虚线（Indent Guides）

> 这是最常见的一种虚线，用来显示代码的缩进层级。

### 📍 控制设置

打开 VS Code 设置（快捷键 `Ctrl + ,` 或 `Cmd + ,`），搜索：

```
editor.guides.indentation
```

可以看到以下几个相关选项：

| 设置项                                        | 说明                |
| ------------------------------------------ | ----------------- |
| `editor.guides.indentation`                | 是否显示缩进参考线（虚线）     |
| `editor.guides.highlightActiveIndentation` | 高亮当前活动缩进层级        |
| `editor.guides.bracketPairs`               | 是否在括号成对的地方显示连接线   |
| `editor.guides.bracketPairsHorizontal`     | 是否显示水平连接虚线（嵌套结构线） |

例如：

```json
"editor.guides.indentation": true,
"editor.guides.highlightActiveIndentation": true,
"editor.guides.bracketPairs": true,
"editor.guides.bracketPairsHorizontal": false
```

> 💡 **说明**：
>
> * “垂直虚线” → 缩进虚线
> * “横向虚线” → 括号配对嵌套线（例如在 Flutter 或 HTML 代码中）

---

## 🎨 二、括号配对虚线（Bracket Pair Guides）

> 当你写 Flutter、HTML 或 JSX 等嵌套较多的代码时，会看到一层层彩色虚线，这是**括号配对高亮功能**。

### 📍 控制设置

搜索：

```
editor.bracketPairColorization.enabled
```

设置为 `true` 可启用彩色括号配对：

```json
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairs": "active"
```

> 可设置为 `"active"`、`"always"`、`"false"` 三种：
>
> * `"active"`：只高亮当前光标所在的配对括号层级；
> * `"always"`：所有层级都显示；
> * `"false"`：不显示。

---

## 🧱 三、扩展提供的结构线（例如 Flutter）

在 Flutter / Dart 文件中，有一种「彩色虚线框」的结构线，用来显示 Widget 的嵌套。这是来自扩展：

### 📦 插件：

* **Flutter Widget Guide**
* **Flutter Tree**
* **Bracket Lens**
* **Guides**

这些扩展会在 Widget 或标签外层显示虚线框、嵌套关系线，有的可以点击虚线来折叠或跳转。

> 📌 如果你想**去掉 Flutter 的虚线框**：
>
> * 禁用或卸载扩展 `Flutter Widget Guide`
> * 或在设置中搜索 `widget guide`，关闭 “Show Guidelines” 相关选项。

---

## 🔧 四、编辑器边界线（Rulers）

这不是虚线，而是编辑区垂直的“列标尺线”。

设置项：

```json
"editor.rulers": [80, 120]
```

→ 在第 80、120 列画一条竖线。

---

## 🚫 五、去掉全部虚线的示例配置

如果你不想要任何虚线，可以这样写在 `settings.json`：

```json
"editor.guides.indentation": false,
"editor.guides.highlightActiveIndentation": false,
"editor.guides.bracketPairs": false,
"editor.bracketPairColorization.enabled": false
```

---

## ✅ 推荐设置（清爽但实用）

```json
"editor.guides.indentation": true,
"editor.guides.highlightActiveIndentation": true,
"editor.guides.bracketPairs": "active",
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairsHorizontal": false
```

---

要不你可以告诉我：

* 你看到的虚线是**垂直的**、**水平的**，还是**框起来的**；
* 是写 Flutter / Vue / HTML / JS 时看到的？

我可以帮你**精准判断是哪种虚线**，并告诉你如何只保留你想要的那种。
