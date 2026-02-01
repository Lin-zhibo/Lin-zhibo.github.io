---
title: uv学习笔记
date: 2026-01-26 17:25:42
tags: [python,uv] 
excerpt: "uv 踩坑血泪史"
---
uv命令基础结构

```
uv [options] <command>
```

uv指定版本创建虚拟环境

```bash
uv venv --python <python version>
```

注：

1. `venv`是默认名字的虚拟环境，会新建一个 `.venv`文件夹

2. 你还可以指定名字，即修改紧跟在uv后的第一个参数即可
