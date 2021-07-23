var snapSlider = document.getElementById('slider');

noUiSlider.create(snapSlider, {
    start: [1, 30],
    tooltips: [ true,true],
    step: 1,
    connect: true,
    range: {
        'min': 0,
        'max': 30
    },
    format: {
    from: function(value) {
            return parseInt(value);
        },
    to: function(value) {
            return parseInt(value);
        }
    }

});


var snapSlider2 = document.getElementById('slider2');

noUiSlider.create(snapSlider2, {
    start: [45, 300],
    tooltips: [true, true],
    step: 1,
    connect: true,
    range: {
        'min': 45,
        'max': 300
    },
    format: {
    from: function(value) {
            return parseInt(value);
        },
    to: function(value) {
            return parseInt(value);
        }
    }
});


var snapSlider3 = document.getElementById('slider3');

noUiSlider.create(snapSlider3, {
    start: [2, 7],
    tooltips: [true, true],
    step: 1,
    connect: true,
    range: {
        'min': 2,
        'max': 7
    },
    format: {
    from: function(value) {
            return parseInt(value);
        },
    to: function(value) {
            return parseInt(value);
        }
    }
});






var Onn=function (){

var a=snapSlider.noUiSlider.get();
var b=snapSlider2.noUiSlider.get();
var c=snapSlider3.noUiSlider.get();

$(".celection__block-m").remove();
$(".celection__block").remove();
var obj=[
{
				floor:21,
				m : 50,
},
{
				floor:20,
				m : 51,
	},
];


 	var num=1;
 var floor;
 var m;
 
 for(var i=0;i < obj.length; i++){
    	for(objSort in obj[i]){
       if(objSort == "floor"){
         floor=obj[i][objSort];         
        } 
      if( objSort == "m"){
         m=obj[i][objSort];         
        }         
  	 }
  	 
  	 if(floor >= a[0] && floor <= a[1] && m >= b[0] && m <= b[1] && i <= 10){
  	 if(num % 2 == 0){
  	 	var text='<div class="col-6 celection__block-m bg"><div class="row celection__item-m"><div class="col-12 col-md"><h3>№</h3></div><div class="col-12 col-md"><h3>Floor</h3></div><div class="col-12 col-md"><h3>Area,m2</h3></div><div class="col-12 col-md"><h3>N-r of rooms</h3></div><div class="col-12 col-md"><h3>Price,$</h3></div><div class="col-12 col-md"><a href="">More detail</a></div></div></div><div class="col-6 col-md-12 celection__block bg"><div class="row celection__number"><div class="col-12 col-md"><h3>'+ num +'</h3></div><div class="col-12 col-md"><h3>'+ floor +'</h3></div><div class="col-12 col-md"><h3>'+ m +'</h3></div><div class="col-12 col-md"><h3>2</h3></div><div class="col-12 col-md"><h3>100000</h3></div><div class="col-12 col-md"><a href="">More detail</a></div></div></div>';

 	  $('.selection__content').append(text) ;	 	 
 	  
 	  }else{
 	  var text='<div class="col-6 celection__block-m "><div class="row celection__item-m"><div class="col-12 col-md"><h3>№</h3></div><div class="col-12 col-md"><h3>Floor</h3></div><div class="col-12 col-md"><h3>Area,m2</h3></div><div class="col-12 col-md"><h3>N-r of rooms</h3></div><div class="col-12 col-md"><h3>Price,$</h3></div><div class="col-12 col-md"><a href="">More detail</a></div></div></div><div class="col-6 col-md-12 celection__block"><div class="row celection__number"><div class="col-12 col-md"><h3>'+ num +'</h3></div><div class="col-12 col-md"><h3>'+ floor +'</h3></div><div class="col-12 col-md"><h3>'+ m +'</h3></div><div class="col-12 col-md"><h3>2</h3></div><div class="col-12 col-md"><h3>100000</h3></div><div class="col-12 col-md"><a href="">More detail</a></div></div></div>';

 	  $('.selection__content').append(text) ;	 	 
 	  
 	  }
 	  } 	 
 	  num++;
 }
 
 				

}
 Onn();
 
 $(".selection__filter").on("touchmove", Onn);
