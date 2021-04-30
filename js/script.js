$(".header__burger").click(function(){
    $(".header__burger").toggleClass("action");
    $(".header__menu").toggleClass("action");
     
})
$(".array").click(function(){
	$(".header__sub__link").toggleClass("action");
	})


var img=$(".slider__body img");
var widthSlider;
var right=0;
var count=0;

function width(){
widthSlider=$(".slider").width();
$(".slider__body").css({"width":widthSlider*img.length +"px"});
img.css({"width":widthSlider+"px"})

count >= img.length ? count=0:count;
count < 0 ? count=img.length-1:count;

right=count*img.width();
$(".slider__body").css({"right":right+"px"});
}

$(window).resize(function(){
width();
})

width();

$("#after").click(function(){
	count++;
	width();
    
})

$("#before").click(function(){
	count--;
	width();
    
})


