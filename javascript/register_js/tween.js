$(function () {
    TweenMax.fromTo('.title', 1, {
        x : -20,
        y: -100,
        opacity: 0
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    });
    TweenMax.fromTo('.content', 1, {
        x: -150,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay : 1,
        ease: Elastic.easeOut.config(1, 0.3)
    });

    console.log('tween ok');
});

//==============================================
var controller = new ScrollMagic.Controller();
    // new 場景

    var wp = new TimelineMax().staggerFromTo('.row2 .four', 0.5, {
        y: -50,//設定動化
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, 0.1);//每隔0.1秒間隔出現



    console.log("time");
    var scene = new ScrollMagic.Scene({
            triggerElement: "#touchpoint",//touchpoint
            reverse: true,//沒處發則反轉動畫效果 即效果消失
            offset:'100px',//距離我設定的觸發點位置位移 ? px
            // duration: '90%'
        })

        .setTween(wp)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    //  add css

//==================================33333333
 var ourScene = new ScrollMagic.Scene({
        triggerElement: "#touchpoint2",
        offset:'100px'
    })
     .setClassToggle('.icon','fade-in')
     .addIndicators({name :'bgc start'})
     .addTo(controller);
//=================================444444444
      var ourScene = new ScrollMagic.Scene({
        triggerElement: "#section_04",
        reverse: true,
        offset:'100px'
    })
     .setClassToggle('.section_04','bacchange')
     .addIndicators({name :'bgcchange start'})
     .addTo(controller);
//=================
//sticky box
var scene_sticky = new ScrollMagic.Scene({
    triggerElement: "#section_05",
    offset:'100',
    duration : '200'
})
.setPin('#sticky')
.addIndicators({name :'go down'})
.addTo(controller);

//===========================
 var scene_move = new ScrollMagic.Scene({
            triggerElement: "#section_06",
            offset: '0',
            duration: '200',
            reverse: true
        })
        .setTween(TweenMax.staggerTo('.section_06 .title', 1, {
            x: 1350,
            ease: Strong.easeInOut
        }))
        .addIndicators({name :'text in'})
        .addTo(controller);
    console.log('move ok');

//=========================
//stellar
  $('#container').stellar({
  horizontalOffset: 0,
  verticalOffset: 0,
});



  //===========nav===========
    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });