// Icarus replaces data-pjax elements, but leaves the <html> attributes unchanged.
hexo.extend.filter.register('after_render:html', html => {
  const language = html.match(/<html\b[^>]*\blang="([^"]*)"/i);
  if (!language) return html;

  return html.replace('</head>',
    `<meta name="page-language" content="${language[1]}" data-pjax></head>`);
});

hexo.extend.injector.register('body_end', `
<script>
  document.addEventListener('pjax:complete', function () {
    const language = document.querySelector('meta[name="page-language"]');
    if (language) document.documentElement.lang = language.content;
  });
</script>
`);
