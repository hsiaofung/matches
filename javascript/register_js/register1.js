$(document).ready(function(){
		$('#textarea').keyup(function(){
			var count = $(this).val().length;

			if(count>50){
				$('#feedbacktext').html(0);
				// alert("字數以滿");
			}else{//小於50
				$('#feedbacktext').html(50-count);
			}
		});




		$('#next').click(function(){


			$("#register_content_session2").css("display","block");
			jQuery("html,body").animate({
				
           				 scrollTop:750
        			},600,);
			$("#register_content_session2").delay(500).animate({opacity:"1"},1500);
			// alert("請選擇一個性別及一套衣服，才算完整註冊唷!ヽ(́◕◞౪◟◕‵)ﾉ");
			// $("#register_content_session2").slideDown(500);
			// $("html,body").animate({
			// 	'scrollTop':$("#register_content_session1").offset().top
			// },2000,'easeOutBounce');
		});
		// $('#register_submit').click(function(){
		// 	$("#register_content_session3").css("display","block");
		// 	$("#register_content_session3").animate({opacity:"1"},1000);
		// 	$("html,body").animate({
		// 		'scrollTop':$("#register_content_session3").offset().top
		// 	},0);

		// });


	});
