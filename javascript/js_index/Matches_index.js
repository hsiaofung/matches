$(window).ready(function(){
		$('#fullpage').fullpage({
		  keyboardScrolling:true,
		  // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		  menu: '#menu',
		  navigation: true,
		  
		  afterLoad: function(anchorLink, index){
		  	// console.log($(window).width());
				var loadedSection = $(this);
			//using index
				if(index == 1){
					if($(window).width()<768){ //rwd 使用
						// =========人物=============
						$(".style2").animate({top:"-10px"},300,function(){
							$(".style3").animate({top:"7px",left:"-36px"},300,function(){
								$(".style4").animate({top:"-2px",left:"35px"},300,function(){
									$(".style5").animate({top:"-32px",left:"-22px"},300)
								})
							})
						})
					// ==========禮物==============
						$(".sp:eq("+0+")").addClass("pRotate");
						$(".sp:eq("+1+")").addClass("pRotate");
						$(".sp:eq("+2+")").addClass("pRotate");
						$(".sp:eq("+3+")").addClass("pRotate2");
						$(".sp:eq("+4+")").addClass("pRotate2");
						$(".sp:eq("+5+")").addClass("pRotate2");
						$(".sp:eq("+6+")").addClass("pRotate3");
						$(".sp:eq("+7+")").addClass("pRotate3");
						$(".sp:eq("+8+")").addClass("pRotate3");
					// ==========交友==============
						$(".s1-friendship1").css({top:"-5px",left:"-5px",transition:".5s 2.1s"});
						$(".s1-friendship2").css({top:"-20px",left:"5px",transition:".5s 2.1s"});

					}
				}
				if(index == 2){
					if($(window).width() > 767){ //pc板
						$('.cloth').css({
							top: '42px',
							zIndex:'2',
							opacity:'1'
						});
						$('.sofa').css({
							top: '120px',
							zIndex:'2',
							opacity:'1' 
						});
						$('.table').css({
							top: '130px',
							zIndex:'2',
							opacity:'1'
						});
						$('.person').css({
							top: '110px',
							zIndex:'2',
							opacity:'1' 
						});						
					}else{//rwd
						$('.cloth').css({
							top: '40px',
							zIndex:'2',
							opacity:'1'
						});
						$('.sofa').css({
							top: '140px',
							zIndex:'2',
							opacity:'1' 
						});
						$('.table').css({
							top: '145px',
							zIndex:'2',
							opacity:'1'
						});
						$('.person').css({
							top: '110px',
							zIndex:'2',
							opacity:'1' 
						});
					} //rwd end
					// console.log($('.present1').css("top"),$('.present1').css("zIndex"));
						if($('.present1').css("zIndex") == -100){  //判斷如果第一次執行過動就不會再進場
							$('.present1').css({
								top: '220px',
								zIndex:'3',
								opacity:'1' 
							});
						}	
					// ======================飛機=================
						if($('.present-fly').css("left")=="-320px"){ //判斷如果第一次執行過動就不會再進場
							if($(window).width() > 767){//pc
								$('.present-fly').delay(1500).animate({left:'50vw'},3000,function(){
										$('.present1').css("transition","0s");
										$('.present1').animate({opacity:'0',},100,function(){
											$('.present2').delay(100).animate({opacity:'1'},100,function(){
												$('.present-fly').animate({left:'110vw'},1000);
											});
										});	
								});
							} else{
								$('.present-fly').delay(1500).animate({left:'25vw'},3000,function(){
										$('.present1').css("transition","0s");
										$('.present1').animate({opacity:'0',},100,function(){
											$('.present2').delay(100).animate({opacity:'1'},100,function(){
												$('.present-fly').animate({left:'110vw'},1000);
											});
										});	
								});
							}
						}	
						// ==============
						if($('.personSay').css('top')=="-10px" && $('.personSay').css("zIndex") == 2){
							$('.personSay').css("zIndex","1");
							$('.personSay').delay(6000).animate({opacity:'1',top:'0'},300);
						}
						if($(window).width()>768){
							for(var z=0;z<$('.scd').length;z++){
								$(".scd:eq("+z+")").delay(6000).slideDown(0);
							}
						}else{
							for(var u=0;u<$('.scd').length;u++){
								$(".scd:eq("+(u+1)+")").delay(6000).slideDown(0);
							}
						}
						if($(window).width()>767){ //pc
							if($(".person").css('top')=="110px" && $(".personSay").css("opacity")== 1){
								$(".person").addClass("personmove");
								$(".personSay").css({opacity:"0",transition:'.3s'});
								$(".personHover").css({zIndex:"3",opacity:"1"});
							}
						}else{ //rwd
							if($(".person").css('top')=="110px"  && $(".personSay").css("opacity")== 1 ){
								$(".personSay").css({opacity:"0",transition:'.3s'});
								$(".personHover").css({zIndex:"3",opacity:"1"});
							}
						}
										
				}
				if(index == 3){
					if($(window).width() > 767){ //pc板
						$(".tree").css({
							top:'-160px',
							zIndex:'1',
							opacity:'1'
						});
						$(".chair").css({
							top:'-5px',
							zIndex:'3',
							opacity:'1'
						});
						$(".person2").css({
							top:'15px',
							zIndex:'3',
							opacity:'1'
						});
					}else{ //rwd
						$(".tree").css({
							top:'-200px',
							zIndex:'1',
							opacity:'1'
						});
						$(".chair").css({
							top:'0px',
							zIndex:'3',
							opacity:'1'
						});
						$(".person2").css({
							top:'-35px',
							zIndex:'3',
							opacity:'1'
						});
					}
					// =============貨車=======================
						if($(".car").css("right") == "-215px"){
							$(".car").animate({right:'40%'},3000,function(){
								$('.person2-present1').animate({opacity:"0"},100,function(){
									$("div[class^='person2Present2']").animate({opacity:'1'},100,function(){
										$(".car").animate({right:'120%'},1000,function(){
											if($(window).width()>767){ //pc
												$('.person2Present22').addClass("boxRotate");
											}else{  //rwd
												$('.person2Present22').addClass("boxRotate2");
											}
											
										// ======svg=============
											$("#spot1").css({
												animation:"spot 0.5s .8s linear both"
											});
											$("#spot2").css({
												animation:"spot 0.5s .8s linear both"
											});
											$(".gift g > path").animate({opacity:"1"},0,function(){
												$(".gift svg g:eq(0)").addClass("giftHead");
											});
											
										// ======svg  end=============
											if($(".personSay2").css("top")=="-160px" && $(".personSay2").css("zIndex")==2){
											$(".personSay2").css("zIndex","1");
											$(".personSay2").delay(2000).animate({opacity:"1",top:"-150px"},300);
											}
										});
									});	
								});
							});
						}
						if($(".person2").css('top')=="15px" && $(".personSay2").css("opacity")== 1){ //pc
							$(".person2").addClass("personmove2");
							$(".personSay2").css({opacity:"0",transition:'.3s'});
							$(".person2Hover").css({zIndex:"3",opacity:"1"});
						}
						if($(".person2").css('top')=="-35px" && $(".personSay2").css("opacity")== 1){
							$(".personSay2").css({opacity:"0",transition:'.3s'});
							$(".person2Hover").css({zIndex:"3",opacity:"1"});
						}

				}
				if(index == 4){
					if($(window).width() > 767){ //pc板
						$(".hanger").css({
							top:'100px',
							zIndex:'2',
							opacity:'1'
						});
						$(".dressing").css({
							top:'23px',
							zIndex:'2',
							opacity:'1'
						});
						$('.dressing2').css({
							top:'23px',
							zIndex:'3',
							opacity:'1'
						});
						$('div[class^="dressing-door"]').css({
							top:'23px',
							zIndex:'3',
							opacity:'1'
						});
						$(".person3").css({
							top:'80px',
							zIndex:'2',
							opacity:'1'
						});
						$(".changeDress").css({
							opacity:'1',
							transition:'1s 1s'
						});
						$(".changeDress2").css({
							opacity:'1',
							transition:'1s 1s'
						});
					}else{
						$(".hanger").css({
							top:'90px',
							zIndex:'1',
							opacity:'1'
						});
						$(".dressing").css({
							top:'22px',
							zIndex:'1',
							opacity:'1'
						});
						$('.dressing2').css({
							top:'22px',
							zIndex:'2',
							opacity:'1'
						});
						$('div[class^="dressing-door"]').css({
							top:'22px',
							zIndex:'1',
							opacity:'1'
						});
						$(".person3").css({
							top:'80px',
							zIndex:'1',
							opacity:'1'
						});
						$(".changeDress").css({
							opacity:'1',
							transition:'1s 1s'
						});
						$(".changeDress2").css({
							opacity:'1',
							transition:'1s 1s'
						});
					}
					$(".man").slideUp(0);   //預設男生衣服先收回 共用
				}
				if(index == 5){
					if($(window).width() > 767){ //pc板
						$('.person4').css({
							top:'110px',
							zIndex:'2',
							opacity:'1'
						});
						$('.person5').css({
							top:'60px',
							zIndex:'2',
							opacity:'1'
						});
						// console.log($(".dm").length);
						for(var i=0 ;i< $(".dm").length; i++){
						// console.log($(".dm")[i]);						
							$(".dm:eq("+i+")").css({
								opacity:'1',
								transition:'.3s '+ 0.3*(i+1) +'s' 
							});
						}

						if($(".dc").css("top") == "0px"){
							if($(window).width()>1499){
								$('.dc:eq(0)').delay(1500).animate({width:'toggle',height:'toggle',top:'165px',left:'20%'},500,function(){
									$('.dc:eq(1)').animate({width:'toggle',height:'toggle',top:'165px',left:'50%'},500,function(){
										$('.dc:eq(2)').animate({width:'toggle',height:'toggle',top:'165px',left:'80%'},500)
									})
								});
							}else{
								$('.dc:eq(0)').delay(1500).animate({width:'toggle',height:'toggle',top:'165px',left:'30%'},500,function(){
									$('.dc:eq(1)').animate({width:'toggle',height:'toggle',top:'165px',left:'50%'},500,function(){
										$('.dc:eq(2)').animate({width:'toggle',height:'toggle',top:'165px',left:'70%'},500)
									})
								});
							}
						}
					}else{ //rwd
						$(".rwdDiscuss").css({opacity:"1",transition:"1s"});
					}
				}
				if(index == 6){
					if($(".ab").css("display")=="none"){
						for(var k=0;k<$(".ab").length;k++){
							$(".ab:eq("+k+")").delay(k*300).slideToggle(300);
						}
					}

				}
				if(index == 7){
					$('.computer-content1').slideDown(100,function(){
						$('.computer-content2').slideDown(100,function(){
							$('.computer-content3').slideDown(100,function(){
								$('.computer-content4').slideDown(100,function(){
									 $('.computer-content5').slideDown(100,function(){
									 	$('.computer-content6').slideDown(100);
									 });
								});
							});
						});
					});		

					for(var i=0;i<$('.BM').length;i++){
						$(".BM:eq("+ i +")").addClass("moneyDown"+i);
					}
					
					$(".bonus33").css("opacity","1");
					$(".bonus3-1").delay(2000).animate({opacity:"1"},300,function(){
						$(".bonus3-1").css({transition:".3s",transform:"rotateY(90deg)"});
					});
					// $(".bonus3-1").css("transform","rotateY(90deg)");
					// console.log($(".bshirt").length);
					for(var k=0 ; k<$(".bshirt").length;k++){
						$(".bshirt:eq("+k+")").css("opacity","1");
					}

					if($(window).width() > 767){ //pc板
						for(var n=0;n<$('.dd').length;n++){
							// =====窗戶變色=======
							$(".window").addClass("windowTransition");

							//========箭頭============
							$('.dd:eq('+n+')').css("opacity","1");
						}
						$(".direction1").css("transitionDelay",".6s");
						$(".direction2").css("transitionDelay",".8s");
						$(".direction3").css("transitionDelay","1.6s");
						$(".direction4").css("transitionDelay","1.8s");
					}
				}

			}
		});	






if($(window).width()>767){
// ====================S1人物動畫====================
				$(".style6").hover(function(){
					// console.log($(this).parent());
					$(this).parent().css("animation-play-state",'paused');
					$(this).css({transform:"scale(1.3,1.3) translateY(50px)",transition:'.3s'});
					$(".style1").css({transform:"scale(1.3,1.3)",transition: ".3s"});
					$(".style2 > img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".style3").removeClass("style3Move");
					$(".style4").removeClass("style4Move");
					$(".style3 > img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".style3").css({top:"42px",left:"-82px",transition:'.3s .3s'});
					$(".style4 > img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".style4").css({top:"20px",left:"84px",transition:'.3s .3s'});
					$(".style5 >img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".style5").css({top:"-52px",left:"-45px",transition:'.3s .3s'});
				},function(){
					$(this).parent().css("animation-play-state",'running');
					$(this).css({transform:"scale(1,1) translateY(0px)",transitionDelay:".6s"});
					$(".style1").css({transform:"scale(1,1)",transitionDelay:'.6s'});
					$(".style2>img").css("transform","scale(1,1)");
					$(".style3").addClass("style3Move");
					$(".style4").addClass("style4Move");
					$(".style3").css({top:"0px",left:""});
					$(".style3 > img").css("transform","scale(1.1,1.1)");
					$(".style4 > img").css("transform","scale(1.1,1.1)");
					$(".style4").css({top:"0px",left:""});
					$(".style5 > img").css("transform","scale(1.1,1.1)");
					$(".style5").css({top:"0px",left:""});
				});

// ====================S1禮物動畫====================
			$(".s1-present10").hover(function(){
					// console.log($(this).parent());
					$(this).parent().css("animation-play-state",'paused');
					$(this).css({transform:"scale(1.3,1.3) translateY(50px)",transition:'.3s'});
					$(".s1-present0").css({transform:"scale(1.3,1.3)",transition: ".3s"});
					$(".s1-present1 > img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".s1-present2 > img").css({transform:"scale(1.3,1.3) rotateZ(30deg)",transition: ".3s .3s"});
					$(".s1-present3 > img").css({transform:"scale(1.3,1.3)",opacity:"0",transition: "transform .3s .3s ,opacity .3s .3s"});
					$(".s1-present4 > img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".s1-present5 > img").css({transform:"scale(1.3,1.3) rotateZ(30deg)",transition: ".3s .3s"});
					$(".s1-present6 > img").css({transform:"scale(1.3,1.3)",opacity:"0",transition: "transform .3s .3s ,opacity .3s .3s"});
					$(".s1-present7 > img").css({transform:"scale(1.3,1.3)",transition: ".3s .3s"});
					$(".s1-present8 > img").css({transform:"scale(1.3,1.3) rotateZ(-30deg)",transition: ".3s .3s"});
					$(".s1-present9 > img").css({transform:"scale(1.3,1.3)",opacity:"0",transition: "transform .3s .3s ,opacity .3s .3s"});
					$(".s1-present1").css({top:"-20px",transition:'.3s'});
					$(".s1-present2").css({top:"-20px",transition:'.3s'});
					$(".s1-present3").css({top:"-20px",transition:'.3s'});
					$(".s1-present4").css({top:"20px",left:"-20px",transition:'.3s'});
					$(".s1-present5").css({top:"20px",left:"-20px",transition:'.3s'});
					$(".s1-present6").css({top:"20px",left:"-20px",transition:'.3s'});
					$(".s1-present7").css({top:"20px",left:"20px",transition:'.3s'});
					$(".s1-present8").css({top:"20px",left:"20px",transition:'.3s'});
					$(".s1-present9").css({top:"20px",left:"20px",transition:'.3s'});
				},function(){
					$(this).parent().css("animation-play-state",'running');
					$(this).css({transform:"scale(1,1) translateY(0px)",transitionDelay:".6s"});
					$(".s1-present0").css({transform:"scale(1,1)",transitionDelay:'.6s'});
					$(".s1-present1>img").css("transform","scale(1,1)");
					$(".s1-present2>img").css("transform","scale(1,1)");
					$(".s1-present3>img").css({transform:"scale(1,1)",opacity:'1'});
					$(".s1-present4>img").css("transform","scale(1,1)");
					$(".s1-present5>img").css("transform","scale(1,1)");
					$(".s1-present6>img").css({transform:"scale(1,1)",opacity:'1'});
					$(".s1-present7>img").css("transform","scale(1,1)");
					$(".s1-present8>img").css("transform","scale(1,1)");
					$(".s1-present9>img").css({transform:"scale(1,1)",opacity:'1'});
					$(".s1-present1").css("top","0");
					$(".s1-present2").css("top","0");
					$(".s1-present3").css("top","0");
					$(".s1-present4").css({top:"0",left:""});
					$(".s1-present5").css({top:"0",left:""});
					$(".s1-present6").css({top:"0",left:""});
					$(".s1-present7").css({top:"0",left:""});
					$(".s1-present8").css({top:"0",left:""});
					$(".s1-present9").css({top:"0",left:""});
				});
// ====================S1交友動畫====================
				$(".s1-friendship7").hover(function(){
					// console.log($(this).parent());
					$(this).parent().css("animation-play-state",'paused');
					$(this).css({transform:"scale(1.3,1.3) translateY(50px)",transition:'.3s'});
					$(".s1-friendship0").css({transform:"scale(1.3,1.3)",transition: ".3s"});
					$(".s1-friendship1 img").css({transform:"scale(1.3,1.3)",transition: ".3s"});
					$(".s1-friendship2 img").css({transform:"scale(1.3,1.3)",transition: ".3s"});
					$(".s1-friendship1").css({left:"-20px",transition: ".3s"});
					$(".s1-friendship2").css({top:"-20px",left:"20px",transition: ".3s"});
					$(".s1-friendship3").css({top:"-85px",left:"-100px",opacity:"1",transition: ".2s"});
					$(".s1-friendship4").css({top:"-90px",left:"200px",opacity:"1",transition: ".2s .2s"});
					$(".s1-friendship5").css({top:"-55px",left:"93px",opacity:"1",transition: ".2s .4s"});
					$(".s1-friendship6").css({top:"-100px",left:"33px",opacity:"1",transition: ".2s .6s"});					
				},function(){
					$(this).parent().css("animation-play-state",'running');
					$(this).css({transform:"scale(1,1) translateY(0px)",transitionDelay:".8s"});
					$(".s1-friendship0").css({transform:"scale(1,1)",transitionDelay:'.8s'});
					$(".s1-friendship1>img").css({transform:"scale(1,1)",transitionDelay:".5s"});
					$(".s1-friendship2>img").css({transform:"scale(1,1)",transitionDelay:".5s"});
					$(".s1-friendship1").css({left:"",transitionDelay:".5s"});
					$(".s1-friendship2").css({top:"0",left:"",transitionDelay:".5s"});
					$(".s1-friendship3").css({top:"0",left:"",opacity:"0"});
					$(".s1-friendship4").css({top:"0",left:"",opacity:"0"});
					$(".s1-friendship5").css({top:"0",left:"",opacity:"0"});
					$(".s1-friendship6").css({top:"0",left:"",opacity:"0"});
				});
}				
// =======================視差====================
			if($(window).width()>767){  //pc板使用
				$(".s2").on('mousemove',function(e){
					var w = $(window).width();
					var h = $(window).height();
					var offsetX = 0.5 - e.pageX / w ;
					var offsetY = 0.5 - e.pageY / h ;
					// console.log(offsetX,offsetY);
					$(".parallax").each(function(i,el){
						var offset =parseInt($(el).data("offset"));
						var translate ="translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px,0px)";
						// console.log($(el),translate,parseInt(offset),$(el).data());
						$(el).css({
							'-webkit-transform':translate,
							'transform':translate,
							'moz-transform':translate
						});

					});
				});

				$(".s3").on('mousemove',function(e){
					var w = $(window).width();
					var h = $(window).height();
					var offsetX = 0.5 - e.pageX / w ;
					var offsetY = 0.5 - e.pageY / h ;
					// console.log(offsetX,offsetY);
					$(".parallax2").each(function(i,el){
						var offset =parseInt($(el).data("offset"));
						var translate ="translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px,0px)";
						// console.log($(el),translate,parseInt(offset),$(el).data());
						$(el).css({
							'-webkit-transform':translate,
							'transform':translate,
							'moz-transform':translate
						});

					});
				});

				$(".s4").on('mousemove',function(e){
					var w = $(window).width();
					var h = $(window).height();
					var offsetX = 0.5 - e.pageX / w ;
					var offsetY = 0.5 - e.pageY / h ;
					// console.log(offsetX,offsetY);
					$(".parallax3").each(function(i,el){
						var offset =parseInt($(el).data("offset"));
						var translate ="translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px,0px)";
						// console.log($(el),translate,parseInt(offset),$(el).data());
						$(el).css({
							'-webkit-transform':translate,
							'transform':translate,
							'moz-transform':translate
						});

					});
				});


				$(".s5").on('mousemove',function(e){
					var w = $(window).width();
					var h = $(window).height();
					var offsetX = 0.5 - e.pageX / w ;
					var offsetY = 0.5 - e.pageY / h ;
					// console.log(offsetX,offsetY);
					$(".parallax4").each(function(i,el){
						var offset =parseInt($(el).data("offset"));
						var translate ="translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px,0px)";
						// console.log($(el),translate,parseInt(offset),$(el).data());
						$(el).css({
							'-webkit-transform':translate,
							'transform':translate,
							'moz-transform':translate
						});

					});
				});
			}

// ===========男女切換=====================	
var count =0 ;
$(".sexcheck").click(function(){
	if(count==0){ //判斷為0開始執行
		count=1;  
		// console.log($(this).data('check'));
		if($(this).data('check')==1){
			if($(".woman").css("display") == "none"){
				$(".man").slideUp(300);
				$(".woman").slideDown(300);
				$(".person3 img").attr("src","images/img_index/person3.png");
			}else{
				alert("可以切換男生唷!!!");
			}
		}else{
			if($(".man").css("display") == "none"){
				$(".woman").slideUp(300);
				$(".man").slideDown(300);
				$(".person3 img").attr("src","images/img_index/person3-2.png");
			}else{
				alert("可以切換女生唷!!!");
			}
		}
		count=0; //讓換人可以正常執行完畢
	}else{
		alert('別急人家還在換衣服');
	}
});	

	
// ============================變裝=========================
	$(".dpd").click(function(){
		if(count==0){
			count=1;
			$('.person3').css("transition","0s"); // transition 會影響animate
			// ==============================窗簾 開門==========================
				$(".dressing-door1").animate({width:'toggle'},50,function(){
					$(".dressing-door2").animate({width:'toggle'},50,function(){
						$(".dressing-door3").animate({width:'toggle'},50,function(){
							$(".dressing-door4").animate({width:'toggle'},50,function(){
								$(".dressing-door5").animate({width:'toggle'},50,function(){
									$(".dressing-door6").animate({width:'toggle'},50,function(){
										$(".dressing-door7").animate({width:'toggle'},50,function(){
											$(".dressing-door8").animate({width:'toggle'},50,function(){
												$(".dressing-door9").animate({width:'toggle'},50)
												if($(window).width()<768){
													$("div[class^='dressing-door']").css("zIndex","2"); //rwd開門後讓門窗的層級比人物高,原本人物層級比窗簾高
												}
											})
										})
									})
								})
							})
						})
					})
				})

				// console.log($(this),$(this).children("img").attr('src'));
				// console.log($(this).children("img").attr('src').replace("_dress",""));
				var change=$(this).children("img").attr('src').replace("_dress","");
			// ========================人物移動==============================
			if($(window).width()>767){ //pc 板
				$(".person3").delay(450).animate({top:"50px",left:"670px"},100,function(){
						// ==============================窗簾 關門==========================
					$(".dressing-door9").delay(550).animate({width:'toggle'},50,function(){
						$(".dressing-door8").animate({width:'toggle'},50,function(){
							$(".dressing-door7").animate({width:'toggle'},50,function(){
								$(".dressing-door6").animate({width:'toggle'},50,function(){
									$(".dressing-door5").animate({width:'toggle'},50,function(){
										$(".dressing-door4").animate({width:'toggle'},50,function(){
											$(".dressing-door3").animate({width:'toggle'},50,function(){
												$(".dressing-door2").animate({width:'toggle'},50,function(){
													$(".dressing-door1").animate({width:'toggle'},50,function(){
														$(".person3 img").attr("src",change); //換衣服用更改img src 位置
														    openDoor();
													})
												})
											})
										})
									})
								})
							})
						})
					})
				});//人物移動到衣櫥裡加窗簾關門＋人物換衣服
			}else{ //rwd 板
				$(".person3").delay(450).animate({top:"50px",left:"500px"},100,function(){
						// ==============================窗簾 關門==========================
					$(".dressing-door9").delay(550).animate({width:'toggle'},50,function(){
						$(".dressing-door8").animate({width:'toggle'},50,function(){
							$(".dressing-door7").animate({width:'toggle'},50,function(){
								$(".dressing-door6").animate({width:'toggle'},50,function(){
									$(".dressing-door5").animate({width:'toggle'},50,function(){
										$(".dressing-door4").animate({width:'toggle'},50,function(){
											$(".dressing-door3").animate({width:'toggle'},50,function(){
												$(".dressing-door2").animate({width:'toggle'},50,function(){
													$(".dressing-door1").animate({width:'toggle'},50,function(){
														$(".person3 img").attr("src",change); //換衣服用更改img src 位置
														    openDoor();
													})
												})
											})
										})
									})
								})
							})
						})
					})
				});//人物移動到衣櫥
			}
		}else{
			alert('別急!!!人家還在換衣服');
		}
		
		// ==============================窗簾 開門第二次換完衣服出來==========================
		function openDoor(){
				$(".dressing-door1").animate({width:'toggle'},50,function(){
					$(".dressing-door2").animate({width:'toggle'},50,function(){
						$(".dressing-door3").animate({width:'toggle'},50,function(){
							$(".dressing-door4").animate({width:'toggle'},50,function(){
								$(".dressing-door5").animate({width:'toggle'},50,function(){
									$(".dressing-door6").animate({width:'toggle'},50,function(){
										$(".dressing-door7").animate({width:'toggle'},50,function(){
											$(".dressing-door8").animate({width:'toggle'},50,function(){
												$(".dressing-door9").animate({width:'toggle'},50,function(){
													if($(window).width()>767){ //pc板
														$(".person3").animate({top:"80px",left:"860px"},100); 
													}else{ //rwd板
														$("div[class^='dressing-door']").css("zIndex","1"); //rwd關門後讓門窗的層級比人物低
														$(".person3").animate({top:"80px",left:"560px"},100); //rwd板
													}
														closeDoor();
												})
											})
										})
									})
								})
							})
						})
					})
				})
		}

		function closeDoor(){
				$(".dressing-door9").animate({width:'toggle'},50,function(){
					$(".dressing-door8").animate({width:'toggle'},50,function(){
						$(".dressing-door7").animate({width:'toggle'},50,function(){
							$(".dressing-door6").animate({width:'toggle'},50,function(){
								$(".dressing-door5").animate({width:'toggle'},50,function(){
									$(".dressing-door4").animate({width:'toggle'},50,function(){
										$(".dressing-door3").animate({width:'toggle'},50,function(){
											$(".dressing-door2").animate({width:'toggle'},50,function(){
												$(".dressing-door1").animate({width:'toggle'},50,function(){
													count=0;
												})
											})
										})
									})
								})
							})
						})
					})
				})
		}

	}); //變裝結束

	// ================活動進度條================
	// console.log($('.an').text());
		for(var e=0;e<$('.an').length;e++){
			var a=$('.an:eq('+e+')').text();
			var b=$('.anl:eq('+e+')').text();
			// console.log(a,b);
			$('.cb:eq('+e+')').css("width",a/b*97+"%"); 
		}
	// ========rwd slick============
	if($(window).width()<768){		
		$(".center").slick({
        dots: true,
        arrows:false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000

      });
		// ======rwd 活動進度條 default===========
		var defaultA=$(".action1_back").children("h3").text();
		var defaultB=$(".action1_back").children(".actionNumberTitle1").children(".actionNumber1").text();
		var defaultC=$(".action1_back").children(".actionNumberTitle1").children(".actionNumberLimit1").text();
		$("#currentTitle").text(defaultA);
		$(".rwdCurentNum").text(defaultB);
		$(".rwdCurentLimit").text(defaultC);
		$(".CNBarTrue").css("width",defaultB/defaultC*97+"%");
			// console.log(defaultA);

			// =======活動進度條slick之後========
		$(".center").on("afterChange",function(index){
			// console.log($(".slick-current").children("h3").text());
			var a=$(".slick-current").children(".rwdTit").text();
			var b=$(".slick-current").children(".rwdCNum").text();
			var c=$(".slick-current").children(".rwdCLimt").text();
			$("#currentTitle").text(a);
			$(".rwdCurentNum").text(b);
			$(".rwdCurentLimit").text(c);
			$(".CNBarTrue").css("width",b/c*97+"%");
		})
	}



});// ready end


