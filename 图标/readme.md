非常棒的想法 👍 ——你想**在 VS Code 中仅替换 `.ts` 文件图标**，其他图标保持图标插件原样，这完全可以做到。
不过这需要一点技巧，因为 **VS Code 不直接允许单独替换扩展包内图标**。下面我教你两种方法（推荐方案在前 👇）。

---

## ✅ 方法一（推荐）：创建一个“图标主题补丁”扩展

这种方法最干净，不会影响你原有的图标插件，也不会被更新覆盖。

### 🔹 步骤 1：确定你现在用的图标主题

在 VS Code 中打开：

> ⚙️ 设置 → 图标主题 → 查看当前选中主题的名字
> 比如是：**Material Icon Theme** 或 **vscode-icons**。

假设是 `Material Icon Theme`。

---

### 🔹 步骤 2：创建自定义图标文件夹

1. 在任意目录（比如桌面）新建一个文件夹：

   ```
   my-icon-theme/
   ```
2. 在其中放入你自己的图标文件，比如：

   ```
   my-icon-theme/icons/ts-custom.svg
   ```

---

### 🔹 步骤 3：创建自定义图标主题配置（`my-icon-theme.json`）

在 `my-icon-theme` 文件夹中创建：

```jsonc
{
  "iconDefinitions": {
    "_file_ts": {
      "iconPath": "./icons/ts-custom.svg"
    }
  },
  "fileExtensions": {
    "ts": "_file_ts"
  },
  "extends": "eq-material-theme-icons"
}
```

> 📘 `extends` 的值写成你当前使用的主题的 ID，比如：
>
> * `eq-material-theme-icons`（Material Icon Theme）
> * `vscode-icons`（VSCode Icons）
> * `a-file-icon-theme`（具体主题 ID 可以在扩展详情页找到）

---

### 🔹 步骤 4：在 VS Code 中加载你的主题

1. 打开命令面板 `Ctrl + Shift + P`；
2. 输入 `Developer: Load Custom Icon Theme`；
3. 选择你刚刚创建的 `my-icon-theme.json`；
4. 选中并启用它 ✅。

现在 `.ts` 文件应该已经用你自定义的图标显示，而其他文件图标依然使用原来的主题。

---

## 🧩 方法二（不推荐，但最快）：直接修改插件文件

⚠️ 每次插件更新都会被覆盖。

1. 打开 VS Code 扩展目录：
   Windows：

   ```
   %USERPROFILE%\.vscode\extensions\
   ```

   macOS / Linux：

   ```
   ~/.vscode/extensions/
   ```
2. 找到你使用的图标插件目录，比如：

   ```
   pkief.material-icon-theme-x.x.x/
   ```
3. 打开：

   ```
   icons/
   ```

   替换里面的 `typescript.svg` 或类似文件。
4. 保存后重启 VS Code。

---

## 💡 补充建议

如果你自己制作了图标（SVG 或 PNG）：

* 建议尺寸：`32x32` 或 `64x64`
* 背景透明
* 色彩风格和原主题保持一致（避免突兀）

---

是否希望我帮你写一个可直接用的
🧩「TypeScript 图标替换主题模板」？
你只要放入自己的 SVG 文件就能立即启用。
