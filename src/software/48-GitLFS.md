---
title: 如何使用 Git LFS
shortTitle: Git LFS
icon: pen-to-square
date: 2025-10-10
star: true
order: 48
category:
  - Git LFS
tag: 
  - Git LFS
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Git LFS
---


如何使用 Git LFS：

## 🚀 **Git LFS 快速上手**

### **1. 安装 Git LFS**

```bash
# macOS
brew install git-lfs

# Ubuntu/Debian
sudo apt-get install git-lfs

# Windows
# 下载安装包：https://git-lfs.github.com/

# 验证安装
git lfs version
```

### **2. 初始化 Git LFS**

```bash
# 在你的仓库目录中执行（只需一次）
git lfs install
```

### **3. 追踪要用 LFS 管理的文件**

```bash
# 追踪特定文件类型
git lfs track "*.bin"        # 模型文件
git lfs track "*.pth"        # PyTorch 模型
git lfs track "*.h5"         # Keras 模型
git lfs track "*.safetensors" # SafeTensors 格式
git lfs track "*.jpg"        # 图片
git lfs track "*.png"        # 图片
git lfs track "*.zip"        # 压缩文件

# 追踪特定文件夹下的所有文件
git lfs track "models/**"
git lfs track "data/**"

# 查看当前追踪的文件类型
git lfs track
```

### **4. 提交和推送**

```bash
# 添加 .gitattributes 文件（LFS 自动创建的）
git add .gitattributes

# 添加你的文件
git add your-model.bin
git add your-image.jpg

# 提交
git commit -m "Add model files via LFS"

# 推送（和普通 Git 一样）
git push origin main
```

## 📋 **完整流程示例**

```bash
# 1. 初始化 LFS
git lfs install

# 2. 追踪二进制文件
git lfs track "*.bin"
git lfs track "*.pth"

# 3. 添加文件
git add .gitattributes
git add model.bin
git commit -m "Add model file"

# 4. 推送
git push origin main
```

## 🔍 **常用命令**

```bash
# 查看 LFS 管理的文件
git lfs ls-files

# 查看 LFS 追踪规则
git lfs track

# 取消追踪某类文件
git lfs untrack "*.bin"

# 查看 LFS 存储使用情况
git lfs status
```

## 💡 **核心概念**

**工作原理：**
- 大文件的**指针**存在 Git 中（很小）
- 大文件的**实际内容**存在 LFS 服务器上
- 克隆时可以选择性下载大文件

**文件标记：**
```bash
# 被 LFS 追踪的文件在 .gitattributes 中
cat .gitattributes
# 输出：
# *.bin filter=lfs diff=lfs merge=lfs -text
# *.pth filter=lfs diff=lfs merge=lfs -text
```

## ⚠️ **注意事项**

1. **在添加文件前先追踪**
   ```bash
   # ✅ 正确顺序
   git lfs track "*.bin"
   git add model.bin
   
   # ❌ 错误顺序（文件已经普通方式添加了）
   git add model.bin
   git lfs track "*.bin"
   ```

2. **已经提交的文件需要迁移**
   ```bash
   # 如果文件已经用普通方式提交，需要迁移
   git lfs migrate import --include="*.bin"
   ```

3. **推送时会有两个过程**
   ```bash
   # 推送时会看到：
   Uploading LFS objects: 100% (1/1), 500 MB | 10 MB/s, done
   # 然后是：
   Enumerating objects: 5, done.
   ```

## 🎯 **对于 Hugging Face 的使用**

```bash
# 1. 初始化
git lfs install

# 2. 追踪常见模型文件
git lfs track "*.bin"
git lfs track "*.safetensors"
git lfs track "*.h5"
git lfs track "*.onnx"

# 3. 提交
git add .gitattributes
git add your-model-files
git commit -m "Add model via LFS"

# 4. 推送
git push origin main
```

这样你就可以成功推送包含二进制文件的项目到 Hugging Face 了！