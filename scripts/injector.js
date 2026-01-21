// scripts/injector.js
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/custom.css">');
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/mermaid-transparent.css">');
hexo.extend.injector.register('body_end', '<script src="/js/tab-title.js"></script>');
hexo.extend.injector.register('body_end', '<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>');

hexo.extend.injector.register('body_end', `
<script>
  document.addEventListener("DOMContentLoaded", function () {
    // 1. 初始化 Mermaid 配置
    mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  flowchart: {
    curve: "basis",
    
    // 【文字到边框的距离调节】核心参数！控制节点框内文字与边框的内边距
    // 值越大 → 框越大、文字离边框越远（防止贴边/溢出）
    // 当前 30：平衡值（足够包裹文字，但节点不会太大）
    padding: 50,
    
    // 【横向节点间距调节】控制同一排节点之间的水平距离
    // 值越小 → 图整体更紧凑（缩小宽度）
    nodeSpacing: 60,
    
    // 【纵向层间距调节】控制不同层（rank）节点之间的垂直距离
    // 值越大 → 纵向更舒展（你要求稍微增加）
    rankSpacing: 50,
    
    htmlLabels: true,
    
    // 【文字换行宽度阈值】控制何时强制换行（你不需要强制换行，所以设大值）
    // 值越大 → 长文本更倾向保持单行（节点高度更小）
    wrappingWidth: 800,
    
    // 【节点宽度行为】false = 节点宽度紧贴内容（不拉满容器，帮助整体缩小）
    useMaxWidth: false
  }
});

    // 2. 渲染函数 (保持你原有的逻辑，不需要动)
    const renderMermaid = () => {
      const codeBlocks = document.querySelectorAll('.highlight.mermaid, pre code.language-mermaid');
      
      codeBlocks.forEach((block, index) => {
        let rawCode = block.textContent;
        let container = block.closest('figure.highlight') || block.closest('pre');
        
        if (container && rawCode) {
          const mermaidDiv = document.createElement('div');
          mermaidDiv.className = 'mermaid';
          mermaidDiv.setAttribute('id', 'mermaid-' + index); 
          mermaidDiv.textContent = rawCode;
          container.parentNode.replaceChild(mermaidDiv, container);
        }
      });

      mermaid.run({
        querySelector: '.mermaid'
      });
    };

    renderMermaid();
  });
</script>
`);