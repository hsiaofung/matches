function init(){



//桌機版 電腦光箱

	var changeDATA = document.getElementById("changeDATA");
	var x = document.getElementById("x");
	var computer = document.getElementById("computer");


	changeDATA.style.display = "none";


	function show(){
		changeDATA.style.display = "";
			if(edit.innerHTML == "儲存"){

			edit.innerHTML = "編輯";
			memName.style.display = "none";
			memBirthday.style.display = "none";
			memEmail.style.display = "none";
			memTel.style.display = "none";
			memAddress.style.display = "none";
			memHobby.style.display = "none";
			memIntroduce.style.display = "none";
			dataReset.style.display = "none";

			memNameText.style.display = "";
			memBirthdayText.style.display = "";
			memEmailText.style.display = "";
			memTelText.style.display = "";
			memAddressText.style.display = "";
			memHobbyText.style.display = "";
			memIntroduceText.style.display = "";
		}

	}
	function close(){
		changeDATA.style.display = "none";
	}

	computer.onclick = show;
	x.onclick = close;



// 信箱動畫
	var letterimg = document.getElementById("letterimg");
	var letterdiv = document.getElementById("letter");

	var letterstart = 0;
	function letterdrop(){
		letterstart+=1;

		if(letterstart>12){
			// console.log(start);
			clearInterval(lettertime);
			letterstart = 0;//重設圖片動畫
			// letterdiv.disabled = false;
		}else{
			letterimg.src = "images/me_img/letter"+letterstart+".png";
			// console.log(letterstart);
		}
		// letterdiv.disabled = true;
	}
//信箱動畫秒數
	var lettertime=0;
	function runtime(){//每0.1秒呼叫一次letterdrop函式
		clearInterval(lettertime);
		lettertime = setInterval(letterdrop,80);
	}


	letterdiv.onmouseover = runtime;


// 禮物動畫
	var giftimg = document.getElementById("giftimg");
	var giftdiv = document.getElementById("gift");

	var giftstart = 0;
	function giftmove(){
		giftstart+=1;

		if(giftstart>16){
			// console.log(start);
			clearInterval(gifttime);
			giftstart = 0;//重設圖片動畫
			// letterdiv.disabled = false;
		}else{
			giftimg.src = "images/me_img/gift"+giftstart+".png";
			// console.log(giftstart);
		}
		// letterdiv.disabled = true;
	}

//禮物動畫秒數
	var gifttime=0;
	function giftruntime(){//每0.1秒呼叫一次letterdrop函式
		clearInterval(gifttime);
		gifttime = setInterval(giftmove,80);
	}


	giftdiv.onmouseover = giftruntime;


//衣櫃動畫
	var clothesimg = document.getElementById("clothesimg");
	var clothesdiv = document.getElementById("clothes");

	var clothesstart = 0;
	function clothesmove(){
		clothesstart+=1;

		if(clothesstart>24){
			// console.log(start);
			clearInterval(clothestime);
			clothesstart = 0;//重設圖片動畫
			// letterdiv.disabled = false;
		}else{
			clothesimg.src = "images/me_img/clothes"+clothesstart+".png";
			// console.log(clothesstart);
		}
		// letterdiv.disabled = true;
	}
//衣櫃動畫秒數
	var clothestime=0;
	function clothesruntime(){//每0.1秒呼叫一次letterdrop函式
		clearInterval(clothestime);
		clothestime = setInterval(clothesmove,80);
	}

	clothesdiv.onmouseover = clothesruntime;


//電腦動畫
	var computerimg = document.getElementById("computerimg");
	var computerdiv = document.getElementById("computer");

	var computerstart = 0;
	function computermove(){
		computerstart+=1;

		if(computerstart>138){
			// console.log(start);
			clearInterval(computertime);
			computerstart = 0;//重設圖片動畫
			// letterdiv.disabled = false;
		}else{
			computerimg.src = "images/me_img/computer"+computerstart+".png";
			// console.log(computerstart);
		}
		// letterdiv.disabled = true;
	}
//電腦動畫秒數
	var computertime=0;
	function computerruntime(){//每0.1秒呼叫一次letterdrop函式
		clearInterval(computertime);
		computertime = setInterval(computermove,17);
	}

	computerdiv.onmouseover = computerruntime;
	// var letterdiv = document.getElementById("letter");
	// var letterimg = document.getElementById("letterimg");

	// function letterdrop(){
	// 	letterimg.style.display = "none";
	// 	letterimg.style.display = "";
	// 	letterimg.style.animation = "letter 1s forwards";
	// }

	// function lettergoback(){
	// 	letterimg.style.animation = "letterback 1s";
	// }

	// letterimg.onmousemove = letterdrop;
	// letterimg.onmouseout = lettergoback;



	// 手機 js
	var mobile_computer = document.getElementById("mobile_computer");
	var mobile_letter = document.getElementById("mobile_letter");
	var mobile_gift = document.getElementById("mobile_gift");
	var mobile_clothes = document.getElementById("mobile_clothes");


	function show_mobile_computer(){
		changeDATA.style.display = "";
		if(edit.innerHTML == "儲存"){

			edit.innerHTML = "編輯";
			memName.style.display = "none";
			memBirthday.style.display = "none";
			memEmail.style.display = "none";
			memTel.style.display = "none";
			memAddress.style.display = "none";
			memHobby.style.display = "none";
			memIntroduce.style.display = "none";
			dataReset.style.display = "none";

			memNameText.style.display = "";
			memBirthdayText.style.display = "";
			memEmailText.style.display = "";
			memTelText.style.display = "";
			memAddressText.style.display = "";
			memHobbyText.style.display = "";
			memIntroduceText.style.display = "";
		}
	}

	function show_mobile_letter(){

	}

	function show_mobile_gift(){

	}

	function show_mobile_clothes(){

	}



	mobile_computer.onclick = show_mobile_computer;
	mobile_letter.onclick = show_mobile_letter;
	mobile_gift.onclick = show_mobile_gift;
	mobile_clothes.onclick = show_mobile_clothes;



// =================編輯頁的編輯button按下去input出現
	var edit = document.getElementById("change");
	var dataReset = document.getElementById("dataReset");
	var showinput = document.getElementById("letter");
	var memName = document.getElementById("memName");
	var memBirthday = document.getElementById("memBirthday");
	var memEmail = document.getElementById("memEmail");
	var memTel = document.getElementById("memTel");
	var memAddress = document.getElementById("memAddress");
	var memHobby = document.getElementById("memHobby");
	var memIntroduce = document.getElementById("memIntroduce");

	var memNameText = document.getElementById("memNameText");
	var memBirthdayText = document.getElementById("memBirthdayText");
	var memEmailText = document.getElementById("memEmailText");
	var memTelText = document.getElementById("memTelText");
	var memAddressText = document.getElementById("memAddressText");
	var memHobbyText = document.getElementById("memHobbyText");
	var memIntroduceText = document.getElementById("memIntroduceText");


	memName.style.display = "none";
	memBirthday.style.display = "none";
	memEmail.style.display = "none";
	memTel.style.display = "none";
	memAddress.style.display = "none";
	memHobby.style.display = "none";
	memIntroduce.style.display = "none";
	dataReset.style.display = "none";
	function editDATA(){


		if(edit.innerHTML == "編輯"){

			edit.innerHTML = "儲存";

			memName.style.display = "";
			memBirthday.style.display = "";
			memEmail.style.display = "";
			memTel.style.display = "";
			memAddress.style.display = "";
			memHobby.style.display = "";
			memIntroduce.style.display = "";
			dataReset.style.display = "";

			memNameText.style.display = "none";
			memBirthdayText.style.display = "none";
			memEmailText.style.display = "none";
			memTelText.style.display = "none";
			memAddressText.style.display = "none";
			memHobbyText.style.display = "none";
			memIntroduceText.style.display = "none";
			change.disabled = false;
		}else{//儲存的話
			edit.innerHTML = "編輯";

			memName.style.display = "none";
			memBirthday.style.display = "none";
			memEmail.style.display = "none";
			memTel.style.display = "none";
			memAddress.style.display = "none";
			memHobby.style.display = "none";
			memIntroduce.style.display = "none";
			dataReset.style.display = "none";

			memNameText.style.display = "";
			memBirthdayText.style.display = "";
			memEmailText.style.display = "";
			memTelText.style.display = "";
			memAddressText.style.display = "";
			memHobbyText.style.display = "";
			memIntroduceText.style.display = "";

			// 1. 要接input和sumbit事件將修改資料存到資料庫 2.加上驗證條件
			memNameText.innerHTML = document.getElementById("memName").value;
			memBirthdayText.innerHTML = document.getElementById("memBirthday").value;
			memEmailText.innerHTML = document.getElementById("memEmail").value;
			memTelText.innerHTML = document.getElementById("memTel").value;
			memAddressText.innerHTML = document.getElementById("memAddress").value;
			memHobbyText.innerHTML = document.getElementById("memHobby").value;
			memIntroduceText.innerHTML = document.getElementById("memIntroduce").value;

			change.disabled = false;

			alert("修改成功!");

		}

	}

	change.onclick = editDATA;





	var dataReset = document.getElementById("dataReset");

	function resetForLastTime(){
		// input的value要去抓資料庫目前的value
		document.getElementById("memName").value = memNameText.innerHTML;
		document.getElementById("memBirthday").value = memBirthdayText.innerHTML;
		document.getElementById("memEmail").value = memEmailText.innerHTML;
		document.getElementById("memTel").value = memTelText.innerHTML;
		document.getElementById("memAddress").value = memAddressText.innerHTML;
		document.getElementById("memHobby").value = memHobbyText.innerHTML;
		document.getElementById("memIntroduce").value = memIntroduceText.innerHTML;
	}

	dataReset.onclick = resetForLastTime;

// 513



function $id(id) {
	return document.getElementById(id);
}

    $id("gift").onclick = showLightBox;
    $id("me_gift_ok_activity").onclick = hide;
    $id("me_gift_ok").onclick = hide;
    $id("me_gift_btn-close_activity").onclick = hide1;
    $id("me_gift_btn-close").onclick = hide1;


  function showLightBox(){
    $id("me_gift_lightbox").style.display = "block";
    // console.log($id("me_gift_lightbox").style )
  }
  function hide(){
    $id("me_gift_lightbox").style.display = "none";
    // console.log($id("me_gift_lightbox").style )
  }
  function hide1(){
    $id("me_gift_lightbox").style.display = "none";
    // console.log($id("me_gift_lightbox").style )
  }






}

window.onload = init;
