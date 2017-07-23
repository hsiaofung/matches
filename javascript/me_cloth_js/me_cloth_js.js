$(document).ready(function(){
	//保存 點按保存跳出確定視窗
	$('.me_cloth_save input').click(function(){
		$('.me_cloth_LightBox_save').css('display','block');
	});


	//保存 關閉保存確認光箱
	$('.me_cloth_save_content input').click(function(){
		$('.me_cloth_LightBox_save').css('display','none');
	});

	//刪除 點按刪除跳出詢問視窗
	$('.me_cloth_delete').click(function(){
		$('.me_cloth_LightBox_delet').css('display','block');
	});


	//刪除 點按input
	$('.me_cloth_delete_content input').click(function(){
		if($(this).val()=="確定"){ //點按確定刪除
			$('.me_cloth_LightBox_delet').css('display','none');
		}else{ //點按取消
			$('.me_cloth_LightBox_delet').css('display','none');
			// console.log('111');
		}
	});


	//更換衣服
	$('.me_cloth_change').click(function(){
		var me_cloth = $(this).parent('.me_cloth_itemButton').parent('.me_cloth_item').children('.me_cloth_itemImg').children('img').attr('src');
		console.log(me_cloth);
		if( me_cloth.search('head') != -1){
			var meHead = me_cloth.replace('_shopItem','');
			$('.me_cloth_clothHead img').attr('src',meHead);
		}else if( me_cloth.search('body') != -1 ){
			$('.me_cloth_clothBody img').attr('src',me_cloth);
		}else if( me_cloth.search('foot') != -1 ){
			$('.me_cloth_clothBotton img').attr('src',me_cloth);
		}
	});
});