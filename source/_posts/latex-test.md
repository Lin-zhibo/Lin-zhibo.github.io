---
title: latex test
date: 2026-02-26 16:59:10
tags:
---

## 1. 行内公式测试 (Inline Math)
这是一个行内公式测试：质能等价方程 $E = mc^2$，以及欧拉公式 $e^{i\pi} + 1 = 0$。
**重点测试下划线是否被破坏**：在这条公式 $x_i + y_i = z_i$ 中，`i` 应该是下标，如果公式渲染失败且 `i` 变成了斜体，说明 Markdown 渲染器冲突。

## 2. 独立公式块测试 (Block Math)
这是一个独立成行的公式块，展示了定积分的基础显示：
$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

## 3. 多行对齐测试 (Aligned Equations)
用于测试 KaTeX 的环境支持以及双反斜杠 `\\` 换行是否生效：
$$
\begin{aligned}
f(x) &= (x+1)^2 \\
&= x^2 + 2x + 1
\end{aligned}
$$

## 4. 矩阵与分段函数 (Matrix & Cases)
矩阵测试（测试大括号与矩阵排版）：
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

分段函数测试（测试复杂场景条件渲染）：
$$
f(x) =
\begin{cases}
x^2, & \text{if } x \ge 0 \\
-x, & \text{if } x < 0
\end{cases}
$$