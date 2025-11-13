---
title: REST API 对 D1 SQL database 增删改查 cloudflare workeres 
shortTitle: cloudflare workers
icon: pen-to-square
date: 2025-11-13
star: true
order: 58
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

# RESTful API 增删改查

1. sigin 增

```js

async function handleSignin(c: Context<{ Bindings: Env }>): Promise<Response> {
  try {
    const { username, password } = await c.req.json();
    // 查询用户是否存在
    const user = await c.env.DB.prepare('SELECT * FROM users WHERE username = ?').bind(username).first();
    // 如果用户存在，返回错误信息
    if (user) {
        return c.json({ error: 'User already exists' }, 400);
    } else {
        // 如果用户不存在，则创建用户
        // 密码加密
        // const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO users (username, password, id) VALUES (?, ?, ?)`;
        const params = [username, password, Date.now()];
        const result = await c.env.DB.prepare(query).bind(...params).run();
        return c.json({ message: 'User created successfully' });
    }
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
}
```