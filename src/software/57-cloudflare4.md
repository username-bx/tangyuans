---
title: REST API 添加login和token验证 cloudflare workeres 
shortTitle: cloudflare workers
icon: pen-to-square
date: 2025-11-13
star: true
order: 57
category:
  - cloudflare workers
tag: 
  - cloudflare workers
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: cloudflare workers
---

# REST API 添加login和token验证 cloudflare workeres

```shell
des: 使用hono/jwt sign函数生成token

```

## 记录思路和流程

1. workers代码 验证Authorization 使用的是 Secret, 不会刷新，没有过期。

2. 改用 jwt 的token，登录会刷新，时间一过会登出
3. 引入 hono/jwt 包
4. 使用 Secret 作为 token 的签名
5. 实现登录接口，返回token
6. 实现 JWT 验证 token 中间件

```js
// workers 自带的验证权限的中间件
// token 是固定值，不会改变，并且 token不会过期，有安全隐患
const authMiddleware = async (c: Context, next: Next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    const token = authHeader.startsWith('Bearer ')
        ? authHeader.substring(7)
        : authHeader;

    if (token !== secret) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    return next();
};
```

```js
// 生成 JWT token
const payload = {
    userId: user.id,
    username: user.username,
    exp: Math.floor(Date.now() / 1000) + 60 * 5 // 5分钟过期
};

const secret = await c.env.SECRET.get();
const token = await sign(payload, secret);

```

7. 记录完整的一个 login 函数

```js

async function handleLogin(c: Context<{ Bindings: Env }>): Promise<Response> {
    try {
        // 获取请求体中的用户名和密码
        const { username, password } = await c.req.json();

        // 查询用户
        const user = await c.env.DB.prepare('SELECT * FROM users WHERE username = ?').bind(username).first();
        if (!user) {
            return c.json({ error: 'User not found' }, 404);
        }
        if (user.password !== password) {
            return c.json({ error: 'Invalid password' }, 401);
        }
        // 生成 JWT token
        const payload = {
            userId: user.id,
            username: user.username,
            exp: Math.floor(Date.now() / 1000) + 60 * 5 // 5分钟过期
        };

        const secret = await c.env.SECRET.get();
        const token = await sign(payload, secret);

        // 返回token
        return c.json({ message: 'Login successful', token, secret });
    } catch (error: any) {
        return c.json({ error: error.message }, 500);
    }
}

```

8. chrome 控制台验证接口是否ok的函数

```js
// 可以直接复制到控制台执行，看返回值

fetch("https://xxx/login",{method:"POST",body:JSON.stringify({username: "a",password:"b"})}).then(e=>console.log(e))

fetch("https://xxx/rest/users",{method:"GET",headers:{"Authorization": "Bearer eyJhbGciOiJIUzI"} }).then(e=>console.log(e))
```