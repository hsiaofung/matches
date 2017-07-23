$(document).ready(function(){

	//結帳
	$(".cart_noticeClosex").click(function(){
		$(".cart_bill").css('display','none');
	});
	$("#cart_billBtn").click(function(){
		$(".cart_bill").css('display','block');
	});
	//結帳end

	$(".cart_add").click(function(){
		$(".cart_itemInside").append('<div class="cart_box"><div class="cart_bg cart_m"><img src="images/cart_image/new_boy/cloth_34.png" alt="紅條紋長襪"></div><div class="cart_itemList"><ul><li>紅條紋長襪</li><li>500點</li><li></li></ul></div><button class="cart_del"><img src="images/cart_image/del.png" alt="刪除"></button></div>');
	});


	//刪除購物車內商品
	$(".cart_del").click(function(){
		var del = $(this);
		del.parents(".cart_box").slideToggle();
	});
	//end
});