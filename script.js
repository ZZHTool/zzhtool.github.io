// 在脚本最前面添加
document.addEventListener('DOMContentLoaded', function () {
    // 保持加载动画至少显示3秒
    setTimeout(() => {
        window.dispatchEvent(new Event('load'));
    }, 2000);
});
// 加载动画控制
window.addEventListener('load', function() {
    // 隐藏加载动画
    gsap.to('.loader', {
        opacity: 0,
        duration: 2,
        onComplete: () => document.querySelector('.loader').remove()
    });

    // 导航栏项动画
    gsap.from('nav ul li', {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'power4.out'
    });

    // 主体内容序列动画
    gsap.from('main section', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.5,
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
