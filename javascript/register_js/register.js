function init(){

	// function $id(id){
 // 		return document.getElementById(id);
	// }
	var changeBoy = document.getElementById("changeBoy");
	var changeGirl = document.getElementById("changeGirl");

	var choose_boy = document.getElementById("choose_boy");
	var choose_girl = document.getElementById("choose_girl");

	// var charactor_img_boy = document.getElementById("charactor_img_boy");
	// var charactor_img_girl = document.getElementById("charactor_img_girl");

	var img_labelfor_boy = document.getElementById("img_labelfor_boy");
	var img_labelfor_girl = document.getElementById("img_labelfor_girl");

	var labelboy = document.getElementById("labelfor_boy");
	var labelgirl = document.getElementById("labelfor_girl");
	var boyborder = document.getElementById("boyborder");
	var girlborder = document.getElementById("girlborder");
	var clothes_top1 = document.getElementById("clothes_top1");
	var clothes_top2 = document.getElementById("clothes_top2");
	var clothes_bot1 = document.getElementById("clothes_bot1");
	var clothes_bot2 = document.getElementById("clothes_bot2");

	var clothes_top1_img = document.getElementById("clothes_top1_img");
	var clothes_top2_img = document.getElementById("clothes_top2_img");
	var clothes_bot1_img = document.getElementById("clothes_bot1_img");
	var clothes_bot2_img = document.getElementById("clothes_bot2_img");


	boyborder.style.border = "3px solid #70c9ea";
	girlborder.style.border = "3px solid white";

//預設皆第一套,第一套有背景色 第二套背景色為白
	clothes_top1.style.backgroundColor = "#b2daed";
	clothes_bot1.style.backgroundColor = "#b2daed";
	clothes_top2.style.backgroundColor = "white";
	clothes_bot2.style.backgroundColor = "white";
	changeBoy.src = "images/register_img/boy-2.png";
	changeGirl.src = "images/register_img/girl-2.png";
//=========到時候需預設第一套服裝的value讓後台接收不需在點
//=========到時候需預設第一套服裝的value讓後台接收不需在點
//=========到時候需預設第一套服裝的value讓後台接收不需在點
//=========到時候需預設第一套服裝的value讓後台接收不需在點

	function showBoyBorder(){
//讓圖片也可以使radio -->checked
		// choose_boy.checked == true;
		// choose_girl.checked == false;
//
		boyborder.style.border = "3px solid #70c9ea";
		girlborder.style.border = "3px solid white";
//換border
		clothes_top1.style.border = "3px solid #70c9ea";
		clothes_top2.style.border = "3px solid #70c9ea";
		clothes_bot1.style.border = "3px solid #70c9ea";
		clothes_bot2.style.border = "3px solid #70c9ea";
		clothes_top1.style.borderBottom = "none";
		clothes_top2.style.borderBottom = "none";
		clothes_bot1.style.borderTop = "none";
		clothes_bot2.style.borderTop = "none";
//換背景色
		clothes_top1.style.backgroundColor = "#b2daed";
		clothes_top2.style.backgroundColor = "#b2daed";
		clothes_bot1.style.backgroundColor = "#b2daed";
		clothes_bot2.style.backgroundColor = "#b2daed";
//換圖片
		clothes_top1_img.src = "images/register_img/boy-2-1.png";
		clothes_top2_img.src = "images/register_img/boy-3-1.png";
		clothes_bot1_img.src = "images/register_img/boy-2-2.png";
		clothes_bot2_img.src = "images/register_img/boy-3-2.png";
//我是男生點話去後預設第一套有背景色 第二套背景色為白色
		clothes_top1.style.backgroundColor = "#b2daed";
		clothes_bot1.style.backgroundColor = "#b2daed";
		clothes_top2.style.backgroundColor = "white";
		clothes_bot2.style.backgroundColor = "white";
//我是男生點下去 人物圖換回第一套服裝
		changeBoy.src = "images/register_img/boy-2.png";
	}

	function showGirlBorder(){
//		
			// choose_girl.checked == true;
		// choose_boy.checked == false;
//
		girlborder.style.border = "3px solid #ff95be";
		boyborder.style.border = "3px solid white";
//換border
		clothes_top1.style.border = "3px solid #ff95be";
		clothes_top2.style.border = "3px solid #ff95be";
		clothes_bot1.style.border = "3px solid #ff95be";
		clothes_bot2.style.border = "3px solid #ff95be";
		clothes_top1.style.borderBottom = "none";
		clothes_top2.style.borderBottom = "none";
		clothes_bot1.style.borderTop = "none";
		clothes_bot2.style.borderTop = "none";
//換背景色
		clothes_top1.style.backgroundColor = "#fcb6d2";
		clothes_top2.style.backgroundColor = "#fcb6d2";
		clothes_bot1.style.backgroundColor = "#fcb6d2";
		clothes_bot2.style.backgroundColor = "#fcb6d2";
//換圖片
		clothes_top1_img.src = "images/register_img/girl-1-1.png";
		clothes_top2_img.src = "images/register_img/girl-2-1.png";
		clothes_bot1_img.src = "images/register_img/girl-1-2.png";
		clothes_bot2_img.src = "images/register_img/girl-2-2.png";
//女生按鈕點下去時預設第一套有景色 第二套沒有
		clothes_top1.style.backgroundColor = "#fcb6d2";
		clothes_bot1.style.backgroundColor = "#fcb6d2";
		clothes_top2.style.backgroundColor = "white";
		clothes_bot2.style.backgroundColor = "white";
//我是女生點下去 人物圖換回第一套服裝
		changeGirl.src = "images/register_img/girl-2.png";
	}
 



	function uniform_1_light(){
		if(choose_boy.checked == true){
				clothes_top1.style.backgroundColor = "#b2daed";
				clothes_bot1.style.backgroundColor = "#b2daed";
				clothes_top2.style.backgroundColor = "white";
				clothes_bot2.style.backgroundColor = "white";
				changeBoy.src = "images/register_img/boy-2.png";
			}else if(choose_girl.checked == true){
			//如果是女生的話
				boyborder.style.border = "3px solid white";
				clothes_top1.style.backgroundColor = "#fcb6d2";
				clothes_bot1.style.backgroundColor = "#fcb6d2";
				clothes_top2.style.backgroundColor = "white";
				clothes_bot2.style.backgroundColor = "white";
				changeGirl.src = "images/register_img/girl-2.png";
		}else{
			alert("抱歉，出了一點錯誤，請重新整理頁面");
		}
		
}	

	function uniform_2_light(){
//沒選到的衣服顏色變白
		if(choose_boy.checked == true){
				clothes_top1.style.backgroundColor = "white";
				clothes_bot1.style.backgroundColor = "white";
				clothes_top2.style.backgroundColor = "#b2daed";
				clothes_bot2.style.backgroundColor = "#b2daed";
				changeBoy.src = "images/register_img/boy-3.png";
			}else if(choose_girl.checked == true){
			//如果是女生的話
				boyborder.style.border = "3px solid white";
				clothes_top1.style.backgroundColor = "white";
				clothes_bot1.style.backgroundColor = "white";
				clothes_top2.style.backgroundColor = "#fcb6d2";
				clothes_bot2.style.backgroundColor = "#fcb6d2";
				changeGirl.src = "images/register_img/girl-3.png";
		}else{
			alert("抱歉，出了一點錯誤，請重新整理頁面");
		}

	}


	clothes_top1.onclick = uniform_1_light;
	clothes_bot1.onclick = uniform_1_light;

	clothes_top2.onclick = uniform_2_light;
	clothes_bot2.onclick = uniform_2_light;


	labelboy.onclick = showBoyBorder;
	labelgirl.onclick = showGirlBorder;

	img_labelfor_boy.onclick = showBoyBorder;
	image_labelfor_girl.onclick = showGirlBorder;
	// charactor_img_boy.onclick = showBoyBorder;
	// charactor_img_girl.onclick = showGirlBorder;	


	// 下一部被點擊時 alert選衣服

	var next = document.getElementById("next");

	function needToChooseClothes(){
		// alert("請選擇一個性別及一套衣服，才算完整註冊唷!ヽ(́◕◞౪◟◕‵)ﾉ");
	}

	next.onclick = needToChooseClothes;

		
	// 若沒選完衣服 跳alert 須寫完才可以送出



	var register_submit = document.getElementById("register_submit");

	function areYouSure(){
		 if (confirm("就決定是你了!")) {
            window.open('registerfinal.html','_blank');
        }
        else {
            return false;
            // alert("網頁錯誤，請稍後重新送出表單!");
        }
	}

	register_submit.onclick = areYouSure;


}//init


		
window.onload = init;