# 快速修复 PATH 脚本
# 将 Node.js 和 Chocolatey 添加到 PATH

Write-Host "=== 修复 PATH 配置 ===" -ForegroundColor Cyan
Write-Host ""

# 要添加的路径
$pathsToAdd = @()

# Node.js 路径
$nodePath = "C:\Program Files\nodejs"
if (Test-Path $nodePath) {
    Write-Host "✓ 找到 Node.js: $nodePath" -ForegroundColor Green
    $pathsToAdd += $nodePath
} else {
    Write-Host "✗ 未找到 Node.js" -ForegroundColor Red
}

# Chocolatey 路径
$chocoPath = "C:\ProgramData\chocolatey\bin"
if (Test-Path $chocoPath) {
    Write-Host "✓ 找到 Chocolatey: $chocoPath" -ForegroundColor Green
    $pathsToAdd += $chocoPath
} else {
    Write-Host "ℹ Chocolatey 未安装" -ForegroundColor Gray
}

if ($pathsToAdd.Count -eq 0) {
    Write-Host "没有需要添加的路径" -ForegroundColor Yellow
    exit
}

# 获取当前用户 PATH
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
Write-Host ""
Write-Host "当前用户 PATH:" -ForegroundColor Yellow
Write-Host $currentPath -ForegroundColor Gray
Write-Host ""

# 检查哪些路径需要添加
$pathsToAddFinal = @()
foreach ($path in $pathsToAdd) {
    if ($currentPath -notlike "*$path*") {
        Write-Host "需要添加: $path" -ForegroundColor Yellow
        $pathsToAddFinal += $path
    } else {
        Write-Host "已存在: $path" -ForegroundColor Green
    }
}

if ($pathsToAddFinal.Count -eq 0) {
    Write-Host ""
    Write-Host "✓ 所有路径已在 PATH 中！" -ForegroundColor Green
    Write-Host "如果命令仍然无法使用，请重启 PowerShell" -ForegroundColor Yellow
    exit
}

# 添加到用户 PATH
Write-Host ""
Write-Host "正在添加到用户 PATH..." -ForegroundColor Yellow

try {
    $newPath = $currentPath
    foreach ($path in $pathsToAddFinal) {
        $newPath += ";$path"
    }
    
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Host "✓ PATH 更新成功！" -ForegroundColor Green
    
    # 更新当前会话的 PATH（临时）
    foreach ($path in $pathsToAddFinal) {
        $env:Path += ";$path"
    }
    Write-Host "✓ 当前会话 PATH 已更新" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "=== 验证安装 ===" -ForegroundColor Cyan
    Write-Host ""
    
    # 测试 Node.js
    if ($pathsToAddFinal -contains $nodePath) {
        Write-Host "测试 Node.js..." -ForegroundColor Yellow
        $nodeVersion = & "$nodePath\node.exe" --version 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ Node.js: $nodeVersion" -ForegroundColor Green
        } else {
            Write-Host "✗ Node.js 测试失败" -ForegroundColor Red
        }
        
        Write-Host "测试 npm..." -ForegroundColor Yellow
        $npmVersion = & "$nodePath\npm.cmd" --version 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ npm: $npmVersion" -ForegroundColor Green
        } else {
            Write-Host "✗ npm 测试失败" -ForegroundColor Red
        }
    }
    
    # 测试 Chocolatey
    if ($pathsToAddFinal -contains $chocoPath) {
        Write-Host "测试 Chocolatey..." -ForegroundColor Yellow
        $chocoVersion = & "$chocoPath\choco.exe" --version 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ Chocolatey: $chocoVersion" -ForegroundColor Green
        } else {
            Write-Host "✗ Chocolatey 测试失败" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "=== 重要提示 ===" -ForegroundColor Cyan
    Write-Host "1. 当前会话已更新，可以立即使用命令" -ForegroundColor White
    Write-Host "2. 为了永久生效，请关闭并重新打开 PowerShell" -ForegroundColor Yellow
    Write-Host "3. 然后运行: node --version 和 npm --version" -ForegroundColor White
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "✗ 更新失败: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "请尝试以管理员身份运行此脚本" -ForegroundColor Yellow
}

Write-Host "按 Enter 退出..."
Read-Host
