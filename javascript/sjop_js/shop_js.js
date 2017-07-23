$(document).ready(function(){

	//送禮光箱打開
	$('.shop_giftFor').click(function(){
		$('.shop_giftFor_LB').css('transition','2s');
		$('.shop_giftFor_LB').css('display','block');	

	});

	//送禮光箱按XX關閉
	$('.shop_LB_close').click(function(){
		$('.shop_giftFor_LB').css('transition','2s');
		$('.shop_giftFor_LB').css('display','none');
		//清除上次選擇的選項
		$('.shop_friend_item').css('backgroundColor','transparent');	
	});

	//選取好友 只能選一個
	//(待完成 *判斷好友是否有這件衣服有的顯示為灰色 *排列順序)
	$('.shop_friend_item').click(function(){
		$(this).css('backgroundColor','#DEEEFA');
		$('.shop_friend_item').not(this).css('backgroundColor','transparent');	
	});

	//點選確認送出表單
	$('.shop_LB_button input').click(function(){
		$('.shop_giftFor_LB').css('display','none');
		//清除上次選擇的選項
		$('.shop_friend_item').css('backgroundColor','transparent');	
	});



	//試穿衣服
	// $('.shop_item').click(function(){
	// 	var cloth = $(this).children('.shop_itemImg').children("img").attr('src');
	// 	// console.log(body);
	// 	var head = cloth.substr(0,10);
	// 	// console.log(str);

	// 	if(body.search('head') != -1){
	// 		var head = cloth.replace('_shopItem','');
	// 		$('.shop_clothHead img').attr('src',head);
	// 	}else if(cloth.search('body') != -1){
	// 		$('.shop_clothBody img').attr('src',cloth);
	// 	}else if(cloth.search('foot') != -1){
	// 		$('.shop_clothBotton img').attr('src',cloth);
	// 	}
		
		
	// });

	//試穿衣服
	$('.shop_clothTest input').click(function(){
		var shopCloth =$(this).parent('.shop_clothTest').parent('.shop_item').children('.shop_itemImg').children('img').attr('src');
		
		if(shopCloth.search('head') != -1){
			var shopHead = shopCloth.replace('_shopItem','');
			$('.shop_clothHead img').attr('src',shopHead);
		}else if(shopCloth.search('body') != -1){
			$('.shop_clothBody img').attr('src',shopCloth);
		}else if(shopCloth.search('foot') != -1){
			$('.shop_clothBotton img').attr('src',shopCloth);
		}
	});






	//小鳥動畫

	setInterval(bird,1000);
	i=0;
	function bird(){
		i++;
		if(i>=4){
			$('.shop_head .bird img').attr('src','images/shop_img/shop_bird_Two.png');
			i=0;
		}else{
			$('.shop_head .bird img').attr('src','images/shop_img/shop_bird_One.png');
		}
	}

	//小蟲蟲動畫
	setInterval(pee,1000);
	x=0;
	function pee(){
		x++;
		if(x>=6){
			$('.shop_pee img').attr('src','images/shop_img/pee3.png');
			x=0;
		}else if(x>=3){
			$('.shop_pee img').attr('src','images/shop_img/pee2.png');
		}else{
			$('.shop_pee img').attr('src','images/shop_img/pee.png');
		}
	}
});