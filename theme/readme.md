在 VS Code（Visual Studio Code）中设置**字体颜色**，主要有两种方式：

---

## 🎨 一、修改配色主题（Theme）

这是**最常见、最简单**的方式。

### ✅ 操作步骤：

1. 打开 VS Code。
2. 按下 `Ctrl + K` 然后再按 `Ctrl + T`（或从菜单中选择 `查看 → 命令面板 → 选择颜色主题`）。
3. 选择一个主题，比如：

   * 🌞 **Light+ (default light)**
   * 🌙 **Dark+ (default dark)**
   * 💡 **One Dark Pro**（非常流行）
   * 💜 **Dracula Official**
   * 🩵 **Tokyo Night**
   * 💚 **Monokai Pro**

> 👉 想要更多主题？打开扩展（`Ctrl + Shift + X`），搜索 `theme` 或者你喜欢的主题名字（如 “Dracula”）。

---

## 🧩 二、自定义字体颜色（用户自定义配色）

如果你想**自定义代码的某一类颜色**（比如字符串、注释、关键字等），可以修改 `settings.json`。

### ✅ 操作步骤：

1. 打开设置文件：

   * 按下 `Ctrl + Shift + P`，输入：

     ```
     Preferences: Open Settings (JSON)
     ```
2. 添加或修改以下内容：

   ```json
   {
     "editor.tokenColorCustomizations": {
       "textMateRules": [
         {
           "scope": "comment",
           "settings": {
             "foreground": "#6A9955"   // 注释的颜色（绿色）
           }
         },
         {
           "scope": "keyword",
           "settings": {
             "foreground": "#C586C0"   // 关键字的颜色（紫色）
           }
         },
         {
           "scope": "string",
           "settings": {
             "foreground": "#CE9178"   // 字符串的颜色（橙色）
           }
         }
       ]
     }
   }
   ```

> 💡 这些 `scope` 是语法范围，比如：
>
> * `"keyword"`：关键字（如 `if`, `for`, `class`）
> * `"string"`：字符串
> * `"comment"`：注释
> * `"variable"`：变量
> * `"function"`：函数名

---

## 🧰 三、推荐几个配色插件（主题类）

| 插件名                  | 特点                          |
| -------------------- | --------------------------- |
| **One Dark Pro**     | 非常流行的暗色主题（GitHub 上 Star 很高） |
| **Dracula Official** | 高对比度、紫色系好看                  |
| **Tokyo Night**      | 蓝紫色柔和风格                     |
| **Ayu**              | 清爽柔和的色彩风格                   |
| **Night Owl**        | 对夜间使用者友好                    |
| **Material Theme**   | 谷歌风格的多色主题合集                 |

---

## ✍️ 四、改变字体样式（如果你也想换字体）

打开设置（Ctrl + ,），搜索：

```
Editor: Font Family
```

输入你喜欢的字体，比如：

```
JetBrains Mono, Fira Code, Cascadia Code, monospace
```

---

要不要我帮你写一份完整的 “VS Code 主题 + 字体美化” 配置示例？包括字体、行距、配色、注释高亮、函数高亮一体化的版本？
