// 加载动画控制
window.addEventListener('load', function() {
    // 隐藏加载动画
    gsap.to('.loader', {
        opacity: 0,
        duration: 0.8,
        onComplete: () => document.querySelector('.loader').remove()
    });

    // 导航栏项动画
    gsap.from('nav ul li', {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: 'power4.out'
    });

    // 主体内容序列动画
    gsap.from('main section', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5
    });
});

// 视差滚动效果
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

setInterval(function () {
    var startTime = performance.now();
    // 堆代码 duidaima.com
    // 设置断点
    debugger;
    var endTime = performance.now();
    // 设置一个阈值，例如100毫秒
    if (endTime - startTime > 100) {
        window.location.href = 'about:blank';
    }
}, 100);
