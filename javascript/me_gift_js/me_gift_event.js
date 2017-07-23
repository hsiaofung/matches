
function showLightBox(){
  // var div = document.createElement('div');
  // div.setAttribute('class', 'card-container me_giftstart');
  // div.setAttribute('id', 'stack1');
  // div.innerHTML = document.getElementById('notyet_pair').innerHTML;
  // document.getElementById('me_gift_lightbox').appendChild(div);
  $id("me_gift_lightbox").style.display = "block";
  // window.alert('123');
  // $id("me_gift_ok").onclick = hide;
  $id("me_gift_btn-close_activity").onclick = hide1;
  $id("me_gift_btn-close_history").onclick = hide1;
  $id("me_gift_btn-close").onclick = hide1;
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
