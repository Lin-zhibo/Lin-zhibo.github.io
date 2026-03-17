---
title: LLM大学习--tokenize
date: 2026-02-26 17:34:23
tags: LLM
toc: true
excerpt: "tokenize学习笔记与心得"
---

${toc}

## 应该如何理解英文单词‘token’？

token: a thing serving as a visible or tangible representation of a fact, quality, feeling, etc. 即token是“一个展现抽象特点（事实、品质、感受等）的事物”

> 对于英文单词本身的具体解释和发展历程，以及其他方向的翻译问题，可以参考一下[剑桥词典](https://dictionary.cambridge.org/dictionary/english/token)和[百科](https://en.wikipedia.org/wiki/Token)

既然，如此我们就能够能够很好地理解所谓“词元”（token）——一个向LLM展示人类自然语言抽象语义的一个事务。这其实和互联网上能够搜索到的一种说法相似：“token是LLM的单词，是LLM理解自然语言的最小单元”。

## 为什么要tokenize？

当我们开始要进行针对自然语言的研究时，我们会发现：语言的目的是传达信息（语义）。而包含这种信息的最小单元就是“词”（当然也有一个字的单词）。

**因此我们使用tokenize的方式，将这种信息进行划分，以此让计算机理解自然语言中的语义信息。**

计算机只能处理数，因此我们需要一种新的**编码方式**（虽然我们现在有很好的编码方式，可惜不含语义信息）

## “改变型”BPE算法

这个所谓的“改变型”BPE算法，就是对于对于UTF\-8存储的字符串，使用BPE算法进行重新编码（其实BPE算法是压缩算法）

比如现在有字节（不是字符串）

> aaabdaaabac

初始（原始的BPE压缩算法没有这个过程，“改变就改变在这里”）：

> a = 0; b = 1; c = 2; d = 3

剩下的编码过程与原始BPE的压缩过程是一样的

统计发现相邻字节对aa出现最多

令 `Z = aa = 4`

字符串变为

> ZabdZabac

在tokenize的过程中，重复上述过程直至到达规定的token个数上限，或者没有出现超过一次的字节对

---

在上面这个例子中，token 1 表示的是b所代表的字节（比如说`0xCF`）

> 个人观点，不一定正确，欢迎批评指正：
> BPE算法进行tokenize后，出现频率较高的一连串字节编码就会被划入1个token中
> 同时能够学习到一些语义，比如 "'.', ' '"和"'.', '\0'"（前者的句号表示这一句话的终结，但后续还有话说；后者的句号表示整个意思表述已经完成）