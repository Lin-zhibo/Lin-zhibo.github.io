// scripts/injector.js
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/custom.css">');
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/mermaid-transparent.css">');
hexo.extend.injector.register('body_end', '<script src="/js/tab-title.js"></script>');
hexo.extend.injector.register('body_end', '<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>');
// 新增：初始化并渲染所有 mermaid 代码块（关键！扫描 pre code.language-mermaid）
hexo.extend.injector.register('body_end', `
<script>
  document.addEventListener("DOMContentLoaded", function () {
    mermaid.initialize({
      startOnLoad: false,  // 关闭自动，改用 run() 更可靠
      theme: "dark",       // 深色主题（匹配你的博客黑底黄字风格，可改成 "default" 或 "neutral" 测试）
      flowchart: { curve: "basis" },  // 启用平滑曲线连接线
      securityLevel: "loose"  // 允许更多特性（如链接）
    });
    
    mermaid.run({
      querySelector: "pre code.language-mermaid"  // 精准扫描你的代码块
    });
  });
</script>
`);