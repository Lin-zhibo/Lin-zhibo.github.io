// scripts/injector.js
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/custom.css">');
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/mermaid-transparent.css">');
hexo.extend.injector.register('body_end', '<script src="/js/tab-title.js"></script>');
hexo.extend.injector.register('body_end', '<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>');
// 新增：初始化并渲染所有 mermaid 代码块（关键！扫描 pre code.language-mermaid）
hexo.extend.injector.register('body_end', `
<script>
  document.addEventListener("DOMContentLoaded", function () {
    // 1. 初始化 Mermaid 配置
      mermaid.initialize({
      startOnLoad: false,
      theme: "dark", 
      flowchart: { 
        curve: "basis",
        // 【新增】增加节点内部的填充，防止文字贴边
        padding: 15, 
        // 【新增】防止 HTML 标签解析错误导致截断
        htmlLabels: true 
      },
      securityLevel: "loose",
    });

    // 2. 关键函数：将 Hexo 的高亮代码块转换为 Mermaid 容器
    const renderMermaid = () => {
      // 扫描 Hexo 生成的两种常见代码块结构：
      // (1) .highlight.mermaid (Icarus 默认生成的结构)
      // (2) pre code.language-mermaid (原生 Markdown 结构)
      const codeBlocks = document.querySelectorAll('.highlight.mermaid, pre code.language-mermaid');
      
      codeBlocks.forEach((block, index) => {
        // 获取纯文本内容 (textContent 会自动忽略内部的 span 标签)
        let rawCode = block.textContent;
        
        // 如果是 .highlight 结构，通常外层是 figure，我们需要替换整个 figure
        // 如果是 pre code 结构，我们需要替换 pre
        let container = block.closest('figure.highlight') || block.closest('pre');
        
        if (container && rawCode) {
          // 创建新的 div 容器交给 Mermaid 处理
          const mermaidDiv = document.createElement('div');
          mermaidDiv.className = 'mermaid';
          // 这里的 id 仅仅是为了防止冲突，mermaid.run 会自动处理
          mermaidDiv.setAttribute('id', 'mermaid-' + index); 
          mermaidDiv.textContent = rawCode;
          
          // 执行替换
          container.parentNode.replaceChild(mermaidDiv, container);
        }
      });

      // 3. 让 Mermaid 扫描新生成的 .mermaid 容器并渲染
      mermaid.run({
        querySelector: '.mermaid'
      });
    };

    renderMermaid();
  });
</script>
`);