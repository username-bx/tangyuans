---
title: WebRtc
shortTitle: WebRtc
icon: pen-to-square
date: 2025-12-16
star: true
order: 65
category:
  - WebRtc
tag:
  - WebRtc
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: WebRtc
---

# WebRtc

## 一、WebRTC 是什么

WebRTC（Web Real-Time Communication）是浏览器原生支持的实时音视频通信技术，主要特点：

- 低延迟（< 1 秒）
- 点对点通信（P2P）
- 无需插件，浏览器原生支持
- 使用 UDP 协议传输媒体流

---

## 二、核心概念

### 1. STUN 服务器（查号台）

帮你查出自己的公网 IP，让对方能找到你。

```js
{
  urls: "stun:218.95.39.209:3478";
}
```

### 2. TURN 服务器（中转站）

当双方无法直连时，所有流量通过 TURN 服务器中转（保底方案）。

```js
{
  urls: 'turn:218.95.39.209:3478',
  username: '用户名',
  credential: '密码'
}
```

### 3. SDP（Offer/Answer）— 自我介绍

双方交换支持的音视频格式、编码方式等信息。

| 角色   | 说明               |
| ------ | ------------------ |
| Offer  | 发起方的"自我介绍" |
| Answer | 接收方的"回应"     |

### 4. ICE Candidate — 联系方式

每个 Candidate 代表一种可能的连接路径：

| 类型    | 比喻     | 说明                         |
| ------- | -------- | ---------------------------- |
| `host`  | 家里座机 | 本地 IP，局域网内直连        |
| `srflx` | 手机号   | STUN 获取的公网 IP，NAT 穿透 |
| `relay` | 前台转接 | TURN 中转，最慢但最可靠      |

连接优先级：`host → srflx → relay`

---

## 三、连接流程（以观看设备视频为例）

```
浏览器                                服务端
  │                                      │
  │  1. GetRtcSdpOffer（请求 Offer）      │
  │  ─────────────────────────────────>  │
  │     返回: ipcsdp + ipccand           │
  │                                      │
  │  2. SetRtcSdpAnser（发送 Answer）     │
  │  ─────────────────────────────────>  │
  │                                      │
  │  3. AddCandidate（发送本地 ICE）       │
  │  ─────────────────────────────────>  │
  │                                      │
  │  4. GetCandis（获取服务端 ICE）        │
  │  ─────────────────────────────────>  │
  │     返回: cands 数组                  │
  │                                      │
  │  5. 视频流传输 🎬                     │
  │  <═════════════════════════════════  │
```

---

## 四、完整代码实现

```js
async function playVideo() {
  let dialogueId = null;

  // 1. 创建连接，配置 ICE 服务器
  const pc = new RTCPeerConnection({
    iceServers: [
      { urls: "stun:218.95.39.209:3478" },
      {
        urls: "turn:218.95.39.209:3478",
        username: "647-ch2000078100",
        credential: "d32fa7",
      },
    ],
  });

  // 收到视频流 → 播放
  pc.ontrack = (e) => {
    console.log("🎬 收到视频流");
    document.querySelector("video").srcObject = e.streams[0];
  };

  // 监听连接状态
  pc.onconnectionstatechange = () => {
    console.log("连接状态:", pc.connectionState);
  };

  // 收集到本地 ICE → 发给服务端
  pc.onicecandidate = async (e) => {
    if (e.candidate && dialogueId) {
      await sendToServer("AddCandidate", {
        DialogueId: dialogueId,
        candidate: e.candidate.candidate,
      });
    }
  };

  // 2. 获取服务端 Offer
  const offerData = await sendToServer("GetRtcSdpOffer", {
    iceurl: "218.95.39.209:3478",
    iceuname: "647-ch2000078100",
    iceupass: "d32fa7",
    icerealm: "realm",
    audio: 0,
  });
  dialogueId = offerData.data.DialogueId;

  // 3. 设置远端 Offer
  await pc.setRemoteDescription({
    type: "offer",
    sdp: offerData.data.ipcsdp,
  });

  // 4. 添加服务端第一个 ICE
  await pc.addIceCandidate({
    candidate: offerData.data.ipccand,
    sdpMid: "0",
    sdpMLineIndex: 0,
  });

  // 5. 创建 Answer 并发送
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer); // 触发 onicecandidate
  await sendToServer("SetRtcSdpAnser", {
    DialogueId: dialogueId,
    sdp: answer.sdp,
  });

  // 6. 获取服务端所有 ICE 并添加
  const candisData = await sendToServer("GetCandis", {
    DialogueId: dialogueId,
  });
  for (const cand of candisData.data.cands) {
    await pc.addIceCandidate({
      candidate: cand,
      sdpMid: "0",
      sdpMLineIndex: 0,
    });
  }

  console.log("✅ 连接完成");
}

// 封装请求
async function sendToServer(method, data) {
  const res = await fetch("https://rtc.minirtc.com/Iot/Dev/OnDevComSet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      AuthId: 647,
      AuthCode: "d32fa7082f0dd0743fbae0e997163619",
      DevId: "ch2000078100",
      method,
      data,
    }),
  });
  return res.json();
}
```

---

## 五、WebRTC vs RTMP

|            | WebRTC               | RTMP     |
| ---------- | -------------------- | -------- |
| 延迟       | < 1 秒               | 2-5 秒   |
| 方向       | 双向                 | 单向推流 |
| 协议       | UDP                  | TCP      |
| 浏览器支持 | 原生                 | 需要转码 |
| 用途       | 实时通话、低延迟监控 | 直播推流 |

常见组合架构：

```
设备 ──RTMP推流──> 服务器 ──WebRTC──> 浏览器观看
```

---

## 六、多人观看架构

### P2P 直连

```
设备 ──┬── 观众A
      ├── 观众B
      └── 观众C
```

设备推多路流，只支持 3-5 人。

### SFU 转发（推荐）

```
设备 ──> SFU服务器 ──┬── 观众A
       (转发)      ├── 观众B
                   └── 观众C
```

设备只推一路，服务器转发，支持几十到几百人。

### MCU 混流

```
用户A ──┐            ┌── 用户A（看到B+C）
用户B ──┼─> MCU ─────┼── 用户B（看到A+C）
用户C ──┘   (混流)   └── 用户C（看到A+B）
```

用于视频会议场景。

---

## 七、调试方法

### Network 面板看不到 WebRTC 流量

因为 WebRTC 用 UDP 协议，不走 HTTP。

### 查看方式

**1. Chrome 内置工具**

```
chrome://webrtc-internals
```

**2. 代码监控**

```js
setInterval(async () => {
  const stats = await pc.getStats();
  stats.forEach((report) => {
    if (report.type === "inbound-rtp" && report.kind === "video") {
      console.log({
        收到字节: report.bytesReceived,
        收到帧数: report.framesReceived,
        丢包数: report.packetsLost,
      });
    }
  });
}, 1000);
```

---

## 八、关键 API 速查

### 8.1 创建连接

```js
const pc = new RTCPeerConnection({
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "turn:xxx", username: "xxx", credential: "xxx" },
  ],
});
```

### 8.2 SDP 交换

```js
// 设置远端 Offer
await pc.setRemoteDescription({ type: "offer", sdp: "..." });

// 创建本地 Answer
const answer = await pc.createAnswer();
await pc.setLocalDescription(answer);

// 如果是发起方，用 createOffer
const offer = await pc.createOffer();
await pc.setLocalDescription(offer);
```

### 8.3 ICE Candidate

```js
// 添加远端 ICE
await pc.addIceCandidate({
  candidate: "...",
  sdpMid: "0",
  sdpMLineIndex: 0,
});
```

### 8.4 事件监听

```js
// 收到媒体流
pc.ontrack = (e) => {
  video.srcObject = e.streams[0];
};

// 收集到本地 ICE
pc.onicecandidate = (e) => {
  if (e.candidate) {
    // 发送给对方
  }
};

// 连接状态变化
pc.onconnectionstatechange = () => {
  console.log(pc.connectionState);
};

// ICE 连接状态
pc.oniceconnectionstatechange = () => {
  console.log(pc.iceConnectionState);
};
```

### 8.5 获取统计信息

```js
const stats = await pc.getStats();
stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    console.log("收到字节:", report.bytesReceived);
  }
});
```

### 8.6 关闭连接

```js
pc.close();
video.srcObject = null;
```

---

## 九、连接状态

| 状态           | 含义             |
| -------------- | ---------------- |
| `new`          | 刚创建           |
| `connecting`   | 正在连接         |
| `connected`    | 连接成功 ✅      |
| `disconnected` | 断开（可能恢复） |
| `failed`       | 失败             |
| `closed`       | 已关闭           |
