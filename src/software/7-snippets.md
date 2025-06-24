---
title: VSCode 使用 Snippets 设置代码块
shortTitle: VSCode Snippets
icon: pen-to-square
date: 2024-05-22
order: 7
tag: 
  - VSCode
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: VSCode Snippets
---

# VSCode使用Snippets设置代码块


## 1. 如何设置

Windows: 文件(file) > 首选项(preferences) > 用户代码片段(configure user snippets)

Mac: Code > 首选项 > 用户片段

VSCode Command



## 2. 全局设置或对应语言设置


```shell

1. Ctrl + Shift + p

2. Configure User Snippets

// 全局文件
3. Global Snippets
// 对应语言
3. js

```


## 3. Snippet 语法

### 1. 占位符 $

光标会默认落到 $1 的位置
按 TAB, 光标会默认落到 $2 的位置


### 2. 占位内容的可选项

${1|a,b,c}，括号中的 1 对应的是按 TAB 之后的光标落点顺序， abc 为可选的项，用逗号隔开。

```json

"方法注释": {
    "prefix": "zs-Function",
    "body": [
      "/**",
      " * @description description...",
      " * @param { ${1|Boolean,Number,String,Object,Array,*|} } name description...",
      " * @return { ${2|Boolean,Number,String,Object,Array,*|} } description...",
      " */",
      "$0"
    ],
    "description": "添加方法注释",
  }

```


### 3. 变量


```JSON

TM_SELECTED_TEXT  当前选定的文本或空字符串
CLIPBOARD 剪贴板的内容




{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Benjamin Print to console": {
		"prefix": "clg",
		"body": [
			"console.log('----${CURRENT_MONTH_NAME}_${CURRENT_DATE}_${CURRENT_HOUR}:${CURRENT_MINUTE} ${CLIPBOARD}----', $1);"
		],
		"description": "Benjamin Log output to console"
	}
}

```