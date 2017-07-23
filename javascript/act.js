$(function(){
    //stellar
$('#container').stellar({
    horizontalOffset: 0,
    verticalOffset: 0,
});

$('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
 $('#act_slideBoard').mouseover(function() {
     $('ul').css('animation-play-state','paused');
 });
 $('#act_slideBoard').mouseout(function() {
     $('ul').css('animation-play-state','running');
 });

});


$(function(){
      for (var i=0; i < 100; i++) {
    $('.balloons').append("<div class='balloon balloon" + i + "'></div>");
  };
});

$(document).ready(function(){
  $('.center').slick({
    dots:true,
    arrows:false,
    infinite:true,
    centerMode:true,
    slidesToShow:1,
    slideToScroll:1,
    centerPadding: '0px',
    autoplay:true,
    autoplaySpeed:3000
  });
});