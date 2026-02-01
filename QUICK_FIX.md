# 快速修复 npm PATH 问题

## ✅ 好消息！

Node.js 和 npm **已经安装**了：
- Node.js: v24.13.0 ✅
- npm: 11.6.2 ✅

只需要将它们添加到 PATH 即可！

---

## 🚀 方法 1: 图形界面（最简单，推荐）

### 步骤：

1. **打开系统属性**
   - 按 `Win + R`
   - 输入 `sysdm.cpl`
   - 按回车

2. **打开环境变量**
   - 点击"高级"标签
   - 点击"环境变量"按钮

3. **编辑用户 PATH**
   - 在"用户变量"区域找到 `Path`
   - 点击"编辑"

4. **添加路径**
   - 点击"新建"
   - 输入：`C:\Program Files\nodejs`
   - 点击"确定"
   
   - 再点击"新建"
   - 输入：`C:\ProgramData\chocolatey\bin`
   - 点击"确定"

5. **保存**
   - 点击所有"确定"按钮关闭窗口

6. **重启 PowerShell**
   - **关闭当前 PowerShell 窗口**
   - **重新打开新的 PowerShell 窗口**

7. **验证**
   ```powershell
   node --version
   npm --version
   ```

---

## 🚀 方法 2: PowerShell 命令（需要管理员权限）

### 步骤：

1. **以管理员身份打开 PowerShell**
   - 按 `Win + X`
   - 选择"Windows PowerShell (管理员)" 或 "终端 (管理员)"

2. **运行以下命令**：

```powershell
# 获取当前用户 PATH
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

# 添加 Node.js 路径（如果还没有）
if ($currentPath -notlike "*C:\Program Files\nodejs*") {
    $currentPath += ";C:\Program Files\nodejs"
}

# 添加 Chocolatey 路径（如果还没有）
if ($currentPath -notlike "*C:\ProgramData\chocolatey\bin*") {
    $currentPath += ";C:\ProgramData\chocolatey\bin"
}

# 保存到用户 PATH
[Environment]::SetEnvironmentVariable("Path", $currentPath, "User")

Write-Host "PATH 已更新！请关闭并重新打开 PowerShell" -ForegroundColor Green
```

3. **关闭并重新打开 PowerShell**

4. **验证**
   ```powershell
   node --version
   npm --version
   ```

---

## 🚀 方法 3: 临时使用（仅当前会话）

如果只是想立即测试项目，可以在当前 PowerShell 中运行：

```powershell
# 临时添加到当前会话
$env:Path += ";C:\Program Files\nodejs;C:\ProgramData\chocolatey\bin"

# 验证
node --version
npm --version

# 然后就可以使用 npm 了
cd c:\Users\Lenovo\OneDrive\Desktop\CS\personal-website
npm install
npm run dev
```

**注意**：关闭 PowerShell 后需要重新运行这些命令。

---

## ✅ 验证安装

配置完成后，在新的 PowerShell 窗口中运行：

```powershell
node --version
# 应该显示: v24.13.0

npm --version
# 应该显示: 11.6.2
```

如果都显示版本号，说明配置成功！🎉

---

## 🎯 然后就可以运行项目了！

```powershell
cd c:\Users\Lenovo\OneDrive\Desktop\CS\personal-website
npm install
npm run dev
```

然后打开浏览器访问：`http://localhost:5173`

---

## ❓ 如果还是不行？

1. **确保关闭并重新打开了 PowerShell**
2. **检查路径是否正确**：
   ```powershell
   Test-Path "C:\Program Files\nodejs\node.exe"
   Test-Path "C:\Program Files\nodejs\npm.cmd"
   ```
   应该都返回 `True`

3. **尝试重启电脑**（有时需要重启才能生效）

---

## 📝 总结

- ✅ Node.js 和 npm 已安装
- ✅ 只需要添加到 PATH
- ✅ 推荐使用方法 1（图形界面）
- ✅ 完成后重启 PowerShell
- ✅ 然后就可以开始开发了！
