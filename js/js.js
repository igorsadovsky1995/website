window.addEventListener("click",function(a){
	var obj = a.target;
	var objs= document.getElementsByClassName("advantages__text");
	//в один масив все нужные обекты
	var arr=[];
	for(let i=0; i <= objs.length ;i++){
		arr[i]=objs[i];
	}
//узнаю совпадение 
	var tar= arr.indexOf(obj);
		var text=document.getElementsByClassName("advantages__text");
	   
	    	for(let i=0; i < text.length ;i++){
			text[i].classList.remove("left")
		}
	 text[tar].classList.add("left");
	var img = document.getElementsByClassName("img__slider");
	if(tar >= 0){
		for(let i=0; i < img.length ;i++){
			img[i].style="visibility:hidden; opacity:0;";
		}					
	img[tar].style="visibility:visible;opasity:1;";
	}

});



function reSize(){
	var card_title=document.getElementsByClassName("card-title");
	var title__card=document.getElementsByClassName("title__card");
	var card_body=document.getElementsByClassName("card-body");

	if(window.innerWidth <= 767 ){
		for(let i=0; i <= card_title.length-1 ;i++){
		title__card[i].prepend(card_title[i]);
        }
	}else{
		for(let i=0; i <= card_title.length-1 ;i++){
		card_body[i].prepend(card_title[i]);
        }
        
	}
}
reSize();
$(window).resize(reSize);

function cn(){
	var carousel_item =$(".carousel-item");
	var count =$('.carousel-inner > div.active').index()+1;
    $("#count").html(count + "/" + carousel_item.length);
}
cn();
$(function () {
  // метод cycle
  $('.bt').click(function () {
    var action = $(this).attr('data-action');
    
    if (action.indexOf('to') >= 0) {

      var action = parseInt(action.substring(3))-1;
    }
    $('#carousel').carousel(action);
    
    cn();   
});
  });