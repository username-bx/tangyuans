---
title: 封装axios
shortTitle: 封装axios
icon: file-code
date: 2025-11-27
order: 9
star: true
tag:
  - vue3 axios
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3 axios
---

# axios 封装

## 1. 完成的目标，使用

```js
// api.ts
import apiRequset form 'request.ts'

// 用户管理
export async function getList(data: {
  page: number;
  pageSize: number;
}) {
  const token = await getToken();
  return await apiRequest<PageData<Platform>>({
    url: "api/list",
    method: "POST",
    data,
    token,
  });
}

// view
const requestParams = {
  page: 1,
  pageSize: 10
}
const { data } = await getList(requestParams);




```

## 2. 封装第一步 创建一个 axios 实例

```js
import axios from "axios";
import type { AxiosInstance } from "axios";

// 生成实例
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 10000,
  validateStatus: (status) => {
    return status >= 200 && status <= 500;
  },
});
```

## 3. 封装第二步，实例接收一个 option，处理 header 和 token

option 类型为对象

```ts
type Options = {
  url: string;
  method: "GET" | "POST" | "DELETE";
  params: Record<string, any>;
  data: Record<string, any>;
  token: string;
  headers: Record<string, string>;
};

async function request<T>({
  url,
  method,
  data,
  params,
  token,
  headers,
}: Otions): Promise<{
  data: Res<T>;
  status: number;
}> {
  // 处理 headers 和 token
  const reqHeaders: Record<string, string> = {
    ...headers,
  };
  if (token) {
    reqHeaders.token = token;
  }

  // 把返回类型 告诉 axios 得到一个 带类型的响应
  // 返回http status 和 data
  let result: {
    data: Res<T>;
    status: number;
  };

  try {
    const res = await instance<Res<T>>({
      url,
      method,
      data,
      params,
      headers: reqHeaders,
    });
    result = {
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    console.error("caught request error", error);
    result = {
      status: -1,
      data: {
        code: 500,
        message: "caught request error",
      },
    };
  }
  return result;
}
```

## 4.处理实例返回的类型

```js
axiosInstance() 返回的类型

{
  status: number; // http 状态码
  data: Promise<T>
}
```

## 5. 完成品

```js
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { router } from '../router'

// 生成实例
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 10000,
  validateStatus: status => {
    return status >= 200 && status <= 500
  },
})

export interface Res<T> {
  code: number
  data?: T
  message: string
}

// 封装基础请求 处理请求头 headers token
async function request<T>({
  url,
  method,
  data,
  params,
  token,
  headers,
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
  token?: string
  headers?: Record<string, string>
}): Promise<{
  data: Res<T>
  status: number
}> {
  // 处理 headers 和 token
  const reqHeaders: Record<string, string> = {
    ...headers,
  }
  if (token) {
    reqHeaders.token = token
  }

  // 把返回类型 告诉 axios 得到一个 带类型的响应
  // 返回http status 和 data
  let result: {
    data: Res<T>
    status: number
  }

  try {
    const res = await instance<Res<T>>({
      url,
      method,
      data,
      params,
      headers: reqHeaders,
    })
    result = {
      data: res.data,
      status: res.status,
    }
  } catch (error) {
    console.error('caught request error', error)
    result = {
      status: -1,
      data: {
        code: 500,
        message: 'caught request error',
      },
    }
  }
  return result
}

// 封装请求 处理业务逻辑
export async function apiRequest<T>({
  url,
  method,
  data,
  params,
  token,
  headers,
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
  token?: string
  headers?: Record<string, string>
}) {
  const result = await request<T>({
    url,
    method,
    data,
    params,
    token,
    headers,
  })

  if (import.meta.env.DEV) {
    console.group('apiRequest', url, method, data, params, token, headers)
    console.dir('result', result)
    console.groupEnd()
  }

  // 业务逻辑处理 错误处理
  if ([401, 403].includes(result.status)) {
    return router.push(`/login?e=${encodeURIComponent(result.data.message ?? '权限调整，请重新登陆')}`)
  }
  if (result.status === 500) {
    return {
      code: 500,
    }
  }

  return result
}

// export async function logout() {
//   const token = await getToken();
//   return await apiRequest<{ message: string }>({
//     url: "/admin/sys/user/logout",
//     method: "POST",
//     token,
//   });
// }


```
