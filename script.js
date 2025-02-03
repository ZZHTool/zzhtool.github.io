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
    check()
}, 1000);
var check = function () {
    function doCheck(a) {
        if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
            (function () { }
            ["constructor"]("debugger")())
        } else {
            (function () { }
            ["constructor"]("debugger")())
        }
        doCheck(++a)
    }
    try {
        doCheck(0)
    } catch (err) { }
};
check(); 
if (window.location.href.indexOf('#debug') == -1) {
    setInterval(function () {
        (function (a) { return (function (a) { return (Function('Function(arguments[0]+"' + a + '")()')) })(a) })('bugger')('de', 0, 0, (0, 0));
    }, 1000);
}

window.onkeydown = window.onkeyup = window.onkeypress = function () {
    window.event.returnValue = false;
    return false;
};
if (window.addEventListener) {
    window.addEventListener("DOMCharacterDataModified", function () { window.location.reload(); }, true);
    window.addEventListener("DOMAttributeNameChanged", function () { window.location.reload(); }, true);
    window.addEventListener("DOMCharacterDataModified", function () { window.location.reload(); }, true);
    window.addEventListener("DOMElementNameChanged", function () { window.location.reload(); }, true);
    window.addEventListener("DOMNodeInserted", function () { window.location.reload(); }, true);
    window.addEventListener("DOMNodeInsertedIntoDocument", function () { window.location.reload(); }, true);
    window.addEventListener("DOMNodeRemoved", function () { window.location.reload(); }, true);
    window.addEventListener("DOMNodeRemovedFromDocument", function () { window.location.reload(); }, true);
    window.addEventListener("DOMSubtreeModified", function () { window.location.reload(); }, true);
}
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

function consoleOpenCallback() {
    close();
}

!function () {
    // 创建一个对象
    let foo = /./;
    // 将其打印到控制台上，实际上是一个指针
    console.log(foo);
    // 要在第一次打印完之后再重写toString方法
    foo.toString = consoleOpenCallback;
}()
