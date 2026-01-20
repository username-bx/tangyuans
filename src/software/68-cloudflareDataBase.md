---
title: cloudflare 建表
shortTitle: cloudflare 建表
icon: pen-to-square
date: 2025-01-20
star: true
order: 68
category:
  - cloudflare db
tag: 
  - cloudflare db
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: cloudflare db
---


CREATE TABLE thoughts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT NOT NULL,
    mood INTEGER DEFAULT 0,
    is_pinned INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT (datetime('now', 'localtime')),
    updated_at INTEGER DEFAULT (datetime('now', 'localtime'))
)




CREATE TABLE thoughts_new (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT NOT NULL,
    mood INTEGER DEFAULT 0,
    is_pinned INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT (strftime('%s','now','localtime')),
    updated_at INTEGER DEFAULT (strftime('%s','now','localtime'))
);