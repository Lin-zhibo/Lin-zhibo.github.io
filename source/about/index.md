---
title: 友情链接
layout: page
date: 2026-01-22 15:00:00
comment: true
widgets: []
sidebar:
    left:
        sticky: false
    right:
        sticky: false
---

<!-- 
关键修改点：
1. .friend-card 默认就加上了 box-shadow (常亮光圈)。
2. .friend-card:hover 触发 .friend-avatar img 的发光效果。
注意：HTML 标签请保持顶格，不要缩进。
-->

<style>
/* 1. 整体布局 */
.friends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

/* 2. 卡片基础样式 - 【常态就显示霓虹光圈】 */
.friend-card {
    background: rgba(20, 20, 20, 0.9);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    height: 100%;
    /* 这里设置默认的白色边框和霓虹光晕 */
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

/* 3. 卡片悬停 - 【仅浮起 + 增强一点点卡片光晕】 */
.friend-card:hover {
    transform: translateY(-8px); /* 浮起效果 */
    /* 悬停时让卡片的光晕稍微强烈一点点，增加交互感 */
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.1);
}

/* 4. 链接去下划线 */
.friend-link {
    text-decoration: none !important;
    color: inherit;
    display: block;
    height: 100%;
}

/* 5. 头像样式 - 【默认无光圈】 */
.friend-avatar img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    /* 默认是暗淡的边框，无光晕 */
    border: 2px solid rgba(255, 255, 255, 0.2);
    object-fit: cover;
    margin: 0;
    transition: all 0.3s ease;
}

/* 6. 头像悬停联动 - 【卡片悬停时，头像亮起】 */
.friend-card:hover .friend-avatar img {
    border-color: #fff; /* 边框变纯白 */
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8); /* 头像出现强光晕 */
}

/* 7. 文字排版 */
.friend-info {
    flex: 1;
    overflow: hidden;
}

.friend-info h3 {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
}

.friend-info p {
    margin: 0;
    font-size: 0.85rem;
    color: #bbb;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

<div class="friends-grid">

<!-- 卡片 1 -->
<a href="https://github.com/Lin-zhibo" target="_blank" class="friend-link">
<div class="friend-card">
<div class="friend-avatar">
<img src="/img/head.png" alt="ZeeBo.Lin">
</div>
<div class="friend-info">
<h3>我的 GitHub</h3>
<p>点击访问我的开源仓库，欢迎 Star 和 Fork！</p>
</div>
</div>
</a>

<!-- 卡片 2 -->
<a href="https://yssx-g.github.io/" target="_blank" class="friend-link">
<div class="friend-card">
<div class="friend-avatar">
<img src="https://avatars.githubusercontent.com/u/150882904?v=4" alt="燕圣书贤">
</div>
<div class="friend-info">
<h3>燕圣书贤</h3>
<p>CS-hf</p>
</div>
</div>
</a>

</div>

<br><br>
<p style="text-align: center; color: #aaa;">
<b>
感谢您浏览我的友情链接！如果想互链，欢迎通过 GitHub 或评论联系我～
</b>
</p>