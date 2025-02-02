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