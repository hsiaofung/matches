$(function () {
    TweenMax.fromTo('#congratulation', 1, {
        x : 0,
        y: -100,
        opacity: 0
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    });
    TweenMax.fromTo('#matchestext', 1, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay : 1,
        ease: Elastic.easeOut.config(1, 0.3)
    });
    TweenMax.fromTo('#congratulation2', 1, {
        x : 0,
        y: -100,
        opacity: 0
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 2,
        ease: Power3.easeOut
    });
     TweenMax.fromTo('#three_banner', 1, {
        x : 0,
        y: 0,
        opacity: 0
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 3,
        ease: Power3.easeOut
    });
});

//==============================================