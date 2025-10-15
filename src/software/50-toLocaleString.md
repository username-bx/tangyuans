---
title: toLocaleString
shortTitle: toLocaleString
icon: pen-to-square
date: 2025-10-10
star: true
order: 50
category:
  - 格式化数据
tag: 
  - 格式化数据
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: 格式化数据
---

# 格式化数据 toLocaleString

`toLocaleString()` 是一个非常有用的 JavaScript 方法，用于**根据本地化设置格式化数据**。让我详细介绍它的用法：

## 🎯 **主要用途**

将数字、日期、数组等数据按照**特定地区的格式规范**进行格式化显示。

## 📊 **Number.prototype.toLocaleString()**

### **基本用法 - 数字格式化**

```javascript
const number = 1234567.89;

// 默认本地化格式
console.log(number.toLocaleString()); 
// 输出: "1,234,567.89" (美国格式)

// 中文格式
console.log(number.toLocaleString('zh-CN')); 
// 输出: "1,234,567.89"

// 德文格式 
console.log(number.toLocaleString('de-DE')); 
// 输出: "1.234.567,89"

// 印度格式
console.log(number.toLocaleString('en-IN')); 
// 输出: "12,34,567.89"
```

### **货币格式化**

```javascript
const price = 1234.56;

// 美元
console.log(price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
}));
// 输出: "$1,234.56"

// 人民币
console.log(price.toLocaleString('zh-CN', {
  style: 'currency', 
  currency: 'CNY'
}));
// 输出: "¥1,234.56"

// 欧元
console.log(price.toLocaleString('de-DE', {
  style: 'currency',
  currency: 'EUR'
}));
// 输出: "1.234,56 €"
```

### **百分比格式化**

```javascript
const percentage = 0.1234;

console.log(percentage.toLocaleString('en-US', {
  style: 'percent'
}));
// 输出: "12%"

console.log(percentage.toLocaleString('en-US', {
  style: 'percent',
  minimumFractionDigits: 2
}));
// 输出: "12.34%"
```

## 📅 **Date.prototype.toLocaleString()**

### **日期时间格式化**

```javascript
const date = new Date();

// 默认格式
console.log(date.toLocaleString()); 
// 输出: "12/25/2024, 2:30:45 PM"

// 中文格式
console.log(date.toLocaleString('zh-CN')); 
// 输出: "2024/12/25 14:30:45"

// 德文格式
console.log(date.toLocaleString('de-DE')); 
// 输出: "25.12.2024, 14:30:45"
```

### **自定义日期格式**

```javascript
const date = new Date();

// 只显示日期
console.log(date.toLocaleString('zh-CN', {
  year: 'numeric',
  month: 'long', 
  day: 'numeric'
}));
// 输出: "2024年12月25日"

// 只显示时间
console.log(date.toLocaleString('zh-CN', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
}));
// 输出: "14:30:45"

// 完整格式
console.log(date.toLocaleString('zh-CN', {
  weekday: 'long',
  year: 'numeric', 
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
}));
// 输出: "星期三2024年12月25日 14:30"
```

## 📋 **Array.prototype.toLocaleString()**

```javascript
const numbers = [1234.5, 6789.1, 2345.67];

console.log(numbers.toLocaleString('en-US'));
// 输出: "1,234.5,6,789.1,2,345.67"

console.log(numbers.toLocaleString('de-DE'));
// 输出: "1.234,5,6.789,1,2.345,67"
```

## 🌍 **常用地区代码**

```javascript
// 主要地区代码
'en-US'    // 美国英语
'zh-CN'    // 中国大陆简体中文  
'zh-TW'    // 台湾繁体中文
'ja-JP'    // 日本日语
'ko-KR'    // 韩国韩语
'de-DE'    // 德国德语
'fr-FR'    // 法国法语
'es-ES'    // 西班牙西班牙语
'it-IT'    // 意大利意大利语
'ru-RU'    // 俄国俄语
'en-GB'    // 英国英语
'pt-BR'    // 巴西葡萄牙语
```

## 🛠️ **实际应用场景**

### **电商价格显示**

```javascript
function formatPrice(price, locale = 'zh-CN', currency = 'CNY') {
  return price.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  });
}

console.log(formatPrice(1234.5)); // "¥1,234.50"
console.log(formatPrice(1234.5, 'en-US', 'USD')); // "$1,234.50"
```

### **数据统计显示**

```javascript
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toLocaleString('zh-CN', {
      maximumFractionDigits: 1
    }) + '百万';
  } else if (num >= 1000) {
    return (num / 1000).toLocaleString('zh-CN', {
      maximumFractionDigits: 1  
    }) + '千';
  }
  return num.toLocaleString('zh-CN');
}

console.log(formatNumber(1234567)); // "1.2百万"
console.log(formatNumber(12345)); // "12.3千"
```

### **多语言日期显示**

```javascript
function formatDate(date, locale = 'zh-CN') {
  return date.toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

const now = new Date();
console.log(formatDate(now, 'zh-CN')); // "2024年12月25日 14:30"
console.log(formatDate(now, 'en-US')); // "December 25, 2024 at 02:30 PM"
```

## 📱 **React/Vue 中的使用**

### **React 示例**

```jsx
function PriceDisplay({ price, locale, currency }) {
  const formattedPrice = price.toLocaleString(locale, {
    style: 'currency',
    currency: currency
  });
  
  return <span className="price">{formattedPrice}</span>;
}

// 使用
<PriceDisplay price={1234.56} locale="zh-CN" currency="CNY" />
```

### **Vue 示例**

```vue
<template>
  <div>
    <p>价格: {{ formatPrice(price) }}</p>
    <p>时间: {{ formatDate(date) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 1234.56,
      date: new Date()
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('zh-CN', {
        style: 'currency',
        currency: 'CNY'
      });
    },
    formatDate(date) {
      return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      });
    }
  }
}
</script>
```

## ⚡ **性能注意事项**

```javascript
// ❌ 避免在循环中重复创建 Intl 对象
for (let price of prices) {
  console.log(price.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' }));
}

// ✅ 推荐：创建一次 Intl.NumberFormat
const formatter = new Intl.NumberFormat('zh-CN', { 
  style: 'currency', 
  currency: 'CNY' 
});

for (let price of prices) {
  console.log(formatter.format(price));
}
```

`toLocaleString()` 是处理国际化数据显示的强大工具，特别适合多语言应用和需要本地化格式的场景！