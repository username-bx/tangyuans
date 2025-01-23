---
title: 在 nextjs 中使用 zod
shortTitle: 在 nextjs 中使用 zod
icon: pen-to-square
date: 2025-01-02
order: 27
tag:
  - zod
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: zod
---

# zod

## 1. 定义用户名校验规则

```ts

// 定义用户名校验规则
const userSchema = z.string({
  required_error: '用户名不能为空',
}).min(3, {
  message: '用户名不能少于 3 个字符',
}).max(10, {
  message: '用户名不能超过 10 个字符',
}).regex(/^[a-z]/, {
  message: '用户名必须以小写字母开头',
}).regex(/^[a-zA-Z0-9]+$/, {
  message: '用户名只能包含字母和数字',
}).refine((data) => {
  return data.includes('tang');
}, {
  message: '用户名不能包含 tang',
})

// 定义密码校验规则
const passwordSchema = z.string({
  required_error: '密码不能为空',
}).min(8, {
  message: '密码不能少于 8 个字符',
}).max(16, {
  message: '密码不能超过 16 个字符',
})

```

## 2. 定义表单 schema

```ts

// 表单schema
const formSchema = z.object({
  username: z.text(userSchema),
  password: z.text(passwordSchema),
})


```

## 3. 使用 zod 校验数据

```ts

export function validateForm(formData: FormData) {
  const result = createFormSchema.parse(formData);
  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }
  return result.data;
}

```
