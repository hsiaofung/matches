$(function(){
    TweenMax.fromTo('.acti_infoTitle', 2,{
        x: 0,
        y: -100,
        opacity: 0
    },{
        x: 0,
        y: 0,
        opacity: 1,
        ease: Bounce.easeOut,
    });


    console.log('tween ok');

    var controller = new ScrollMagic.Controller();
    //new一個場景

    var wp = new TimelineMax().staggerFromTo('.flow .item',0.5,{
        y: -50,
        opacity: 0
    },{
        y: 0,
        opacity: 1
    },0.1);

    console.log("time");
    var scene = new ScrollMagic.Scene({
        triggerElement: "#acti_section_01",
        reverse: true,
        offset: '50px',
        //duration: '90%'
    })

    .setTween(wp)
    // .addIndicators() //顯示觸發點
    .addTo(controller);




});