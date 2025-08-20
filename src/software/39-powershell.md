---
title: powershell脚本 修改文件名称，添加随机串
shortTitle: powershell脚本
icon: pen-to-square
date: 2025-08-20
order: 39
tag: powershell
  - 
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: powershell
---


# powershell脚本 修改文件名称，添加随机串


```shell
$root = Get-Location
$indexFile = Join-Path $root 'index.html'
$cssFile = Join-Path $root 'index.css'
$mapFile = Join-Path $root 'rename-map.json'
$imageFolder = Join-Path $root 'image'
$newCssFileFullPath = "" # 用于在重命名时捕获新的CSS文件路径

if (-not (Test-Path $indexFile)) {
    Write-Error "找不到 index.html"
    exit
}

# 读取旧随机串
$oldRandom = ""
if (Test-Path $mapFile) {
    $mapObj = Get-Content $mapFile -Raw | ConvertFrom-Json
    if ($mapObj -ne $null -and $mapObj.CurrentRandom) {
        $oldRandom = $mapObj.CurrentRandom
    }
}

# 生成新随机串
function Get-RandomHexString {
    param([int]$length = 6)
    $chars = '0123456789ABCDEF'.ToCharArray()
    -join (1..$length | ForEach-Object { $chars[(Get-Random -Minimum 0 -Maximum $chars.Length)] })
}
$newRandom = "RAM" + (Get-RandomHexString -length 6)

# 支持的文件扩展名（JS/CSS + 图像）
$targetExtensions = @("*.js", "*.css", "*.png", "*.jpg", "*.jpeg", "*.gif", "*.webp", "*.svg")

# 获取所有匹配文件，包括 image 文件夹里的图片
$files = Get-ChildItem -Path $root -Include $targetExtensions -Recurse -File

# 保存旧 -> 新文件名映射（只针对 image 文件夹）
$imageRenameMap = @{}

foreach ($file in $files) {
    $oldName = $file.Name
    $fullPath = $file.FullName
    $dir = Split-Path $fullPath

    # 判断是否是 image 文件夹下的
    $isImageFolder = $dir -like "*\image" -or $dir -like "*/image"

    if ($oldRandom -ne "") {
        $newName = $oldName -replace [regex]::Escape($oldRandom), $newRandom
    } else {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($oldName)
        $ext = $file.Extension
        $newName = "$newRandom.$baseName$ext"
    }

    if ($newName -ne $oldName) {
        Rename-Item -Path $fullPath -NewName $newName
        # 如果当前处理的文件是 index.css (或它被重命名后的版本)
        if ($file.Name.EndsWith('index.css', [System.StringComparison]::OrdinalIgnoreCase)) {
            # 我们就立刻捕获它刚刚生成的新路径，存起来供后续使用
            $newCssFileFullPath = Join-Path (Split-Path $fullPath) $newName
        }
        # 记录 image 文件夹下图片的新旧路径（相对路径）
        if ($isImageFolder) {
            $relativeOldPath = "image/$oldName"
            $relativeNewPath = "image/$newName"
            $imageRenameMap[$relativeOldPath] = $relativeNewPath
        }
    }
}

# -------------------- 请用下面的代码替换掉你脚本里原来的整个函数 --------------------

function Replace-Image-References {
    param($content)

    foreach ($entry in $imageRenameMap.GetEnumerator()) {
        $oldPath = $entry.Key      # 例如 "image/unactive.png"
        $newPath = $entry.Value    # 例如 "image/RAMA1B2C3.unactive.png"

        # 【重要修正】
        # 为了能匹配 CSS 中 "url(./image/path)" 这种带点的写法，
        # 我们进行两次替换。先替换更具体的 "./path"，再替换 "path"。
        # 这样可以确保两种情况都能被正确处理。

        # 1. 替换带 "./" 的路径
        $content = $content.Replace("./$oldPath", "./$newPath")

        # 2. 替换不带 "./" 的路径
        $content = $content.Replace($oldPath, $newPath)
    }

    return $content
}
# -------------------- 替换结束 --------------------




# 更新 index.html
$indexContent = Get-Content $indexFile -Encoding UTF8 -Raw
if (-not ([string]::IsNullOrEmpty($newCssFileFullPath))) {
    $newCssFileNameOnly = Split-Path $newCssFileFullPath -Leaf
    $oldCssHref = ""
    # 新的 href 总是指向新文件名
    $newCssHref = "./$newCssFileNameOnly"

    if ($oldRandom -ne "") {
        # 后续运行：旧的 href 包含旧的随机串
        $oldCssHref = "./$($oldRandom).index.css"
    } else {
        # 首次运行：旧的 href 就是原始路径
        $oldCssHref = "./index.css"
    }
    
    Write-Host "  - 正在将 CSS 链接从 '$oldCssHref' 更新为 '$newCssHref'..."
    $indexContent = $indexContent.Replace($oldCssHref, $newCssHref)
} else {
    Write-Warning "在重命名过程中未找到 index.css，无法更新 <link> 标签。"
}
[System.IO.File]::WriteAllText($indexFile, $indexContent, (New-Object System.Text.UTF8Encoding $false))


# -------------------- 请用下面的代码块，完整替换掉脚本最后那段“更新 index.css”的逻辑 --------------------

# 更新 index.css
Write-Host "正在更新 CSS 文件内的图片引用..."

# 直接使用我们在循环中捕获到的新CSS文件路径
if (-not ([string]::IsNullOrEmpty($newCssFileFullPath)) -and (Test-Path $newCssFileFullPath)) {
    # --- 请在这里加上下面这一整行 DEBUG 代码 ---
    Write-Host "--- DEBUG: 图片替换映射表内容 ---" -ForegroundColor Yellow; $imageRenameMap | Format-Table | Out-String | Write-Host -ForegroundColor Yellow; Write-Host "--- DEBUG: 映射表内容结束 ---" -ForegroundColor Yellow

    $cssContent = Get-Content $newCssFileFullPath -Encoding UTF8 -Raw
    # 确保你已经使用了我之前提供的、能处理 "./" 路径的 Replace-Image-References 函数
    $cssContent = Replace-Image-References $cssContent
    [System.IO.File]::WriteAllText($newCssFileFullPath, $cssContent, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "✅ CSS 文件更新成功: $newCssFileFullPath"
} else {
    Write-Warning "在所有文件中未找到或未能成功更新 'index.css'。请检查该文件是否存在于项目中。"
}

# -------------------- 替换结束 --------------------

# 保存当前随机串
$saveObj = @{ CurrentRandom = $newRandom }
$saveObj | ConvertTo-Json -Depth 1 | Out-File -Encoding UTF8 $mapFile

Write-Host "`n✅ 所有资源重命名完成！"
Write-Host "旧随机串: $oldRandom"
Write-Host "新随机串: $newRandom`n"

```