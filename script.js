document.addEventListener('DOMContentLoaded', function () {
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
// 生成星空
document.addEventListener('DOMContentLoaded', () => {
    const container = document.body;
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll('.fade-in');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function fadeInFeatures() {
        features.forEach(function (feature) {
            if (isElementInViewport(feature)) {
                feature.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', fadeInFeatures);
    fadeInFeatures();
});
// 视差滚动效果
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
function fuckyou() {
    window.close();
}
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

window.addEventListener('devicemotion', function (event) {
    fuckyou();
});

window.addEventListener('resize', function () {
    if (window.outerHeight - window.innerHeight > 250 || window.outerWidth - window.innerWidth > 250) {
        fuckyou();
    }
});

var detectTool = {};
Object.defineProperty(detectTool, 'isOpen', {
    get: function () {
        fuckyou();
    }
});

/** 全局事件监听*/
document.body.onkeydown = function (e) {
    var keyCode = e.keyCode || e.which || e.charCode;
    var ctrlKey = e.ctrlKey || e.metaKey;
    if (ctrlKey && (keyCode == 83 || keyCode == 85 || keyCode == 73)) {
        e.preventDefault();
        return false;
    } else if (keyCode && keyCode == 123) {
        return false;
    } else if (ctrlKey && shiftKey && key === 'c') {
        e.preventDefault();
        return false;
    }
}

/**禁止右击事件菜单弹出*/
document.oncontextmenu = ContextMenu;
function ContextMenu() {
    return false;
}
