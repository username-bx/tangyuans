---
icon: file-code
date: 2024-05-21
order: 1
tag: 
  - React Native
---


# 环境搭建


## rn介绍

1. react-native 相关介绍

移动端:
	1. web app 和pc web没有什么区别
	2. native android (java kotlin) IOS (Objective-C swift) 原生
	3. hybridApp 混合开发 通过一个native container(WebView)展示H5页面 利用webApp在native组件中展示
	
	
rn:
	真正的移动端
	打包时,把rn的组件映射为android或者IOS的组件
	
	
	
rn环境搭建
1. 沙盒环境
	// 安装cli
	npm install -g expo-cli
	// 测试是否安装完成
	expo -V
	// 创建新项目
	expo init xxx
	// 启动项目
	npm run start


2. 原生环境
	1. 检查node版本 version>18
	2. 下载jdk17
	3. 下载android studio
		1. Android SDK         Android SDK Platform 33 Intel x86 Atom_64 System Image  Android SDK Platform 34 Intel x86 Atom_64 System Image
		2. Android SDK Platform
		3. Android Virtual Device
		2. 设置环境变量到系统变量
			1. path
			
				%ANDROID_HOME%\platform-tools
				%ANDROID_HOME%\emulator
				%ANDROID_HOME%\tools
				%ANDROID_HOME%\tools\bin
			2. 系统变量
				ANDROID_HOME C:\Users\你的用户名\AppData\Local\Android\Sdk
				
				
				
3. 创建应用
	1. 使用cli
		1. 清除之前的cli:npm uninstall -g react-native-cli @react-native-community/cli
		2. 安装最新的cli:npm i -g react-native-cli @react-native-community/cli
		3. 测试版本: react-native -v
		
	2. 创建项目
		react-native init xxx
	3. 启动应用
		npm run start
		
		
		



	