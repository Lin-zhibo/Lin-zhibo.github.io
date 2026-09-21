// 动态网页标题
var originTitle = document.title;
var titleTime;

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 用户离开当前标签页
        document.title = '~404~';
        clearTimeout(titleTime);
    } else {
        // 用户回到当前标签页
        document.title = originTitle;
        // 如果你希望回来时显示一句话，稍后再变回原标题，可以使用下面的代码（可选）
        document.title = '欢迎回来！';
        titleTime = setTimeout(function () {
            document.title = originTitle;
        }, 2000);
    }
});