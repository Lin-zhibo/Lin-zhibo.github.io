---
title: 友情链接
layout: page
date: 2026-01-22 15:00:00
comment: true
---

<!-- ## 友情链接 -->

<!-- 下面是自定义样式，适配 Cyberpunk 风格 -->
<style>
/* 卡片基础样式：深色半透明背景，无边框 */
.friend-card {
    background: rgba(20, 20, 20, 0.8) !important;
    border: 1px solid #333;
    border-radius: 4px;
    transition: all 0.3s ease;
    height: 100%; /* 保证高度对齐 */
}

/* 鼠标悬停时的效果：上浮 + 青色霓虹光圈 */
.friend-card:hover {
    transform: translateY(-5px);
    border-color: #00ffea;
    box-shadow: 0 0 15px rgba(0, 255, 234, 0.4);
}

/* 标题文字颜色 */
.friend-card .title {
    color: #fff !important;
    font-size: 1.1rem !important;
    margin-bottom: 0.5rem !important;
}

/* 描述文字颜色 */
.friend-card .subtitle {
    color: #bbb !important;
    font-size: 0.85rem !important;
    margin-top: 0 !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* 文字太长自动省略号 */
}

/* 头像样式 */
.friend-card figure.image img {
    border-radius: 50%; /* 圆形头像 */
    border: 2px solid #333;
}
.friend-card:hover figure.image img {
    border-color: #00ffea; /* 悬停时头像框也变色 */
}

/* 去掉链接下划线 */
a.friend-link-wrapper {
    text-decoration: none !important;
}
</style>

<!-- Bulma 布局开始 -->
<div class="columns is-multiline">

<!-- 友链 1：Hexo -->
<!-- <div class="column is-12-mobile is-6-tablet is-4-desktop">
    <a href="https://hexo.io/zh-cn/" target="_blank" class="friend-link-wrapper">
        <div class="card friend-card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <!-- 如果没有图片，可以用默认图，或者换成对方的头像地址 -->
                            <img src="https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe84b054508011cdcbb9/65b13/hexo-logo-avatar.png" alt="Hexo">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">Hexo</p>
                        <p class="subtitle is-6">快速、简洁且高效的博客框架</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div> -->

<!-- 友链 2：GitHub -->
<div class="column is-12-mobile is-6-tablet is-4-desktop">
    <a href="https://github.com/Lin-zhibo" target="_blank" class="friend-link-wrapper">
        <div class="card friend-card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <!-- 使用你自己的头像 -->
                            <img src="/img/head.png" alt="ZeeBo">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">我的 GitHub</p>
                        <p class="subtitle is-6">点击访问我的开源仓库</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>

<!-- 友链 3：Google (演示添加更多) -->
<!-- <div class="column is-12-mobile is-6-tablet is-4-desktop">
    <a href="https://google.com" target="_blank" class="friend-link-wrapper">
        <div class="card friend-card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">Google</p>
                        <p class="subtitle is-6">遇事不决先问我</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div> -->

<!-- 新增友链模板 -->
<div class="column is-12-mobile is-6-tablet is-4-desktop">
    <a href="https://yssx-g.github.io/" target="_blank" class="friend-link-wrapper">
        <div class="card friend-card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <!-- 头像地址 -->
                            <img src="https://avatars.githubusercontent.com/u/150882904?v=4" alt="github">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">燕圣书贤</p>
                        <p class="subtitle is-6">CS-hf</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>

</div>
<!-- 布局结束 -->