---
title: 友情链接
layout: page
date: 2026-01-22 15:00:00
comment: true
---

<style>
/* 整体网格：超级弹性响应式 */
.friends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
    padding: 0 1rem;
}

/* 卡片基础 */
.friend-card {
    background: rgba(20, 20, 20, 0.9);
    border: 1px solid #333;
    border-radius: 12px;
    transition: all 0.4s ease;
    overflow: hidden;
}

/* 悬停霓虹特效 */
.friend-card:hover {
    transform: translateY(-10px);
    border-color: #00ffea;
    box-shadow: 0 0 25px rgba(0, 255, 234, 0.6);
}

/* 链接包裹 */
.friend-link {
    display: block;
    text-decoration: none;
    color: inherit;
}

/* 内容布局 */
.card-inner {
    padding: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

/* 头像 */
.friend-avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #333;
    object-fit: cover;
    transition: border-color 0.4s;
}
.friend-card:hover .friend-avatar img {
    border-color: #00ffea;
}

/* 文字 */
.friend-info h3 {
    margin: 0 0 0.8rem 0;
    font-size: 1.3rem;
    color: #fff;
}
.friend-info p {
    margin: 0;
    font-size: 0.95rem;
    color: #ccc;
    line-height: 1.5;
    word-break: break-word;
}
</style>

<div class="friends-grid">

    <!-- 我的 GitHub -->
    <a href="https://github.com/Lin-zhibo" target="_blank" class="friend-link">
        <div class="friend-card">
            <div class="card-inner">
                <div class="friend-avatar">
                    <img src="/img/head.png" alt="ZeeBo.Lin">
                </div>
                <div class="friend-info">
                    <h3>我的 GitHub</h3>
                    <p>点击访问我的开源仓库，欢迎 Star 和 Fork！这里有各种有趣的项目、代码分享和技术笔记。</p>
                </div>
            </div>
        </div>
    </a>

    <!-- 燕圣书贤 -->
    <a href="https://yssx-g.github.io/" target="_blank" class="friend-link">
        <div class="friend-card">
            <div class="card-inner">
                <div class="friend-avatar">
                    <img src="https://avatars.githubusercontent.com/u/150882904?v=4" alt="燕圣书贤">
                </div>
                <div class="friend-info">
                    <h3>燕圣书贤</h3>
                    <p>CS-hf，一个专注于计算机科学的个人博客，分享学习笔记、技术心得和有趣的编程经验。</p>
                </div>
            </div>
        </div>
    </a>

    <!-- 添加新友链模板：复制这个整块，改 href / img / h3 / p 即可 -->
    <!--
    <a href="https://example.com" target="_blank" class="friend-link">
        <div class="friend-card">
            <div class="card-inner">
                <div class="friend-avatar">
                    <img src="https://example.com/avatar.jpg" alt="站点名">
                </div>
                <div class="friend-info">
                    <h3>站点名称</h3>
                    <p>这里写描述，支持很长的多行文字，会自动弹性换行和调整卡片高度。</p>
                </div>
            </div>
        </div>
    </a>
    -->

</div>

感谢浏览我的友情链接！如果想互链，欢迎通过 GitHub 或评论联系我～