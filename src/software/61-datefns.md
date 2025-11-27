---
title: date-fns / date-fns-tz / @date-fns/tz 包说明
shortTitle: date-fns
icon: pen-to-square
date: 2025-11-27
star: true
order: 61
category:
  - date-fns
tag:
  - date-fns
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: date-fns
---

# date-fns / date-fns-tz / @date-fns/tz 包说明

本文档用于说明上述三个包的关系、差异以及推荐的使用方式。

---

## 1. 包简介

### **date-fns**

轻量级、模块化的 JavaScript 日期处理库，提供格式化、解析、计算等基础操作。
**不包含任何时区处理能力。**

示例：

```ts
import { format, addDays } from "date-fns";

format(new Date(), "yyyy-MM-dd");
addDays(new Date(), 7);
```

---

### **date-fns-tz**

由 date-fns 官方团队维护的早期独立时区库。
提供时区转换、格式化以及 UTC 与本地时间之间的转换。

> 当前该包属于 **旧版命名（legacy）**，后续不会新增功能，但仍可继续使用。

示例：

```ts
import { formatInTimeZone } from "date-fns-tz";

formatInTimeZone(new Date(), "Asia/Shanghai", "yyyy-MM-dd HH:mm:ss");
```

---

### **@date-fns/tz**

date-fns 官方推出的 **新命名的时区包**，功能等价于 `date-fns-tz`，未来将作为主要维护目标。

> 建议在新项目中优先使用该包。

示例：

```ts
import { formatInTimeZone } from "@date-fns/tz";

formatInTimeZone(new Date(), "America/New_York", "yyyy-MM-dd HH:mm:ss");
```

---

## 2. 包之间的关系

```
date-fns                  ← 核心基础功能
├── date-fns-tz           ← 早期官方时区扩展包（旧命名）
└── @date-fns/tz          ← 官方时区扩展包（新命名，推荐）
```

- `date-fns` 为核心包，提供基础 API。
- `date-fns-tz` 与 `@date-fns/tz` 均基于 `date-fns`，用于实现时区相关功能。
- `@date-fns/tz` 是官方未来推荐的包，因此应在新项目中优先使用。

---

## 3. 功能差异对比

| 特性           | date-fns   | date-fns-tz  | @date-fns/tz       |
| -------------- | ---------- | ------------ | ------------------ |
| 日期格式化     | ✔️         | ✔️           | ✔️                 |
| 日期计算       | ✔️         | ✔️           | ✔️                 |
| 时区转换       | ❌         | ✔️           | ✔️                 |
| UTC ↔ 本地转换 | ❌         | ✔️           | ✔️                 |
| 官方推荐度     | ⭐⭐⭐⭐⭐ | ⭐⭐（旧包） | ⭐⭐⭐⭐⭐（新包） |
| 未来维护重点   | ✔️         | ❌           | ✔️                 |

---

## 4. 推荐的使用方式

### 新项目

```bash
npm install date-fns @date-fns/tz
```

### 不推荐（旧包）

```bash
npm install date-fns date-fns-tz
```

---

## 5. 示例：项目中时区格式化

```ts
import { formatInTimeZone } from "@date-fns/tz";

formatInTimeZone(item.betTime, "Asia/Shanghai", "yyyy-MM-dd HH:mm:ss");
```

---

## 6. 总结

- **date-fns**：核心日期处理库（必装）
- **@date-fns/tz**：官方最新时区扩展包（推荐）
- **date-fns-tz**：历史遗留包（不建议在新项目中使用）

如果项目需要跨时区处理，应安装并使用 `@date-fns/tz`。

---
