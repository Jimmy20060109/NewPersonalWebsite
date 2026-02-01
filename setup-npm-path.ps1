# npm PATH 自动配置脚本
# 以管理员身份运行此脚本以获得最佳效果

Write-Host "=== npm PATH 配置工具 ===" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js 是否已安装
Write-Host "正在检查 Node.js 安装..." -ForegroundColor Yellow
$nodePaths = @(
    "C:\Program Files\nodejs",
    "C:\Program Files (x86)\nodejs",
    "$env:ProgramFiles\nodejs"
)

$foundNodePath = $null
foreach ($path in $nodePaths) {
    if (Test-Path $path) {
        $npmPath = Join-Path $path "npm.cmd"
        if (Test-Path $npmPath) {
            $foundNodePath = $path
            Write-Host "✓ 找到 Node.js: $path" -ForegroundColor Green
            break
        }
    }
}

if (-not $foundNodePath) {
    Write-Host "✗ 未找到 Node.js 安装" -ForegroundColor Red
    Write-Host ""
    Write-Host "请先安装 Node.js:" -ForegroundColor Yellow
    Write-Host "1. 访问 https://nodejs.org/" -ForegroundColor White
    Write-Host "2. 下载并安装 LTS 版本" -ForegroundColor White
    Write-Host "3. 安装时确保勾选 'Add to PATH'" -ForegroundColor White
    Write-Host ""
    Read-Host "按 Enter 退出"
    exit
}

# 检查 npm 全局包目录
$npmGlobalPath = "$env:APPDATA\npm"
$npmGlobalExists = Test-Path $npmGlobalPath

if ($npmGlobalExists) {
    Write-Host "✓ 找到 npm 全局目录: $npmGlobalPath" -ForegroundColor Green
} else {
    Write-Host "ℹ npm 全局目录不存在（可选）" -ForegroundColor Gray
}

# 检查当前 PATH
Write-Host ""
Write-Host "检查当前 PATH..." -ForegroundColor Yellow
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
$pathNeedsUpdate = $false
$pathsToAdd = @()

if ($currentPath -notlike "*$foundNodePath*") {
    Write-Host "✗ Node.js 路径不在用户 PATH 中" -ForegroundColor Red
    $pathsToAdd += $foundNodePath
    $pathNeedsUpdate = $true
} else {
    Write-Host "✓ Node.js 路径已在用户 PATH 中" -ForegroundColor Green
}

if ($npmGlobalExists -and $currentPath -notlike "*$npmGlobalPath*") {
    Write-Host "✗ npm 全局目录不在用户 PATH 中" -ForegroundColor Red
    $pathsToAdd += $npmGlobalPath
    $pathNeedsUpdate = $true
} elseif ($npmGlobalExists) {
    Write-Host "✓ npm 全局目录已在用户 PATH 中" -ForegroundColor Green
}

# 如果不需要更新，直接退出
if (-not $pathNeedsUpdate) {
    Write-Host ""
    Write-Host "✓ PATH 配置正确，无需更新！" -ForegroundColor Green
    Write-Host ""
    Write-Host "请关闭并重新打开 PowerShell，然后运行:" -ForegroundColor Yellow
    Write-Host "  npm --version" -ForegroundColor White
    Write-Host ""
    Read-Host "按 Enter 退出"
    exit
}

# 询问是否添加到 PATH
Write-Host ""
Write-Host "需要添加到 PATH 的路径:" -ForegroundColor Yellow
foreach ($path in $pathsToAdd) {
    Write-Host "  - $path" -ForegroundColor White
}
Write-Host ""

$confirm = Read-Host "是否将这些路径添加到用户 PATH？(Y/N)"
if ($confirm -ne "Y" -and $confirm -ne "y") {
    Write-Host "已取消操作" -ForegroundColor Yellow
    exit
}

# 添加到 PATH
Write-Host ""
Write-Host "正在添加到 PATH..." -ForegroundColor Yellow

try {
    $newPath = $currentPath
    foreach ($path in $pathsToAdd) {
        if ($newPath -notlike "*$path*") {
            $newPath += ";$path"
            Write-Host "  + 添加: $path" -ForegroundColor Green
        }
    }
    
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Host ""
    Write-Host "✓ PATH 更新成功！" -ForegroundColor Green
    Write-Host ""
    Write-Host "重要提示:" -ForegroundColor Yellow
    Write-Host "1. 请关闭当前 PowerShell 窗口" -ForegroundColor White
    Write-Host "2. 重新打开新的 PowerShell 窗口" -ForegroundColor White
    Write-Host "3. 运行 'npm --version' 验证" -ForegroundColor White
    Write-Host ""
    
    # 更新当前会话的 PATH（临时）
    $env:Path += ";" + ($pathsToAdd -join ";")
    Write-Host "当前会话已临时更新，可以立即测试:" -ForegroundColor Cyan
    Write-Host "  npm --version" -ForegroundColor White
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "✗ 更新失败: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "请尝试以管理员身份运行此脚本" -ForegroundColor Yellow
    Write-Host "或者手动添加路径（参考 NPM_SETUP_GUIDE.md）" -ForegroundColor Yellow
}

Read-Host "按 Enter 退出"
