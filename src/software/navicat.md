---
title: Navicat 重置试用期 图形化数据库管理及发展软件, navicat重置yaaet期
shortTitle: navicat reset
cover: /assets/images/navicat.png
icon: pen-to-square
date: 2023-10-23
order: 5
tag: 
  - Navicat
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: navicat reset 
---

# Navicat 重置试用期 图形化数据库管理及发展软件

记录下来,自用.

```shell


@echo off

echo Delete HKEY_CURRENT_USER\Software\PremiumSoft\NavicatPremium\Registration[version and language]
for /f %%i in ('"REG QUERY "HKEY_CURRENT_USER\Software\PremiumSoft\NavicatPremium" /s | findstr /L Registration"') do (
    reg delete %%i /va /f
)
echo.

echo Delete Info folder under HKEY_CURRENT_USER\Software\Classes\CLSID
for /f %%i in ('"REG QUERY "HKEY_CURRENT_USER\Software\Classes\CLSID" /s | findstr /E Info"') do (
    reg delete %%i /va /f
)
echo.

echo Finish

pause


```


## Mac Navicat

```shell
/usr/libexec/PlistBuddy -c "Delete :014BF4EC24C114BEF46E1587042B3619" ~/Library/Preferences/com.navicat.NavicatPremium.plist
/usr/libexec/PlistBuddy -c "Delete :91F6C435D172C8163E0689D3DAD3F3E9" ~/Library/Preferences/com.navicat.NavicatPremium.plist
/usr/libexec/PlistBuddy -c "Delete :B966DBD409B87EF577C9BBF3363E9614" ~/Library/Preferences/com.navicat.NavicatPremium.plist

rm -rf ~/Library/Application\ Support/PremiumSoft\ CyberTech/Navicat\ CC/Navicat\ Premium/.*
```