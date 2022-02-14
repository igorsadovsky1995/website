$(document).ready(function(){

   $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });



  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).closest('.select__list').fadeOut();
      $(this).closest('.select__list').prev().text($(this).text());
      $(this).closest('.select__list').prev().prev().val($(this).text());
      $('.select__item').removeClass('action');
      $(this).addClass('action');
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  
         if(!$(e.target).closest('.header').length){
            $('.search-header').removeClass('open');
         }
      
      
  });
   
  $('.header').on('click','.icon-search',function(){

   $('.search-header').addClass('open');
   $('.search-header__text').focus();
   
  })

   /*------------------- blog and news -----------------*/
   $('.blog__choise').on('click',function(){
      $('.button-16').removeClass('action');
      $(this).addClass('action');
     
   })
   /*---------------------------------------------------*/

   /*------------------------ Choise leng ----------------*/
   $('.leng-choise').on('click',function(){
      $('.leng-choise').removeClass('action');
      $(this).addClass('action');
   })

   function header(){
      if(window.innerWidth > 767){
         for(var i=0; i < $('.link-header__list').length;i++){
            var obj=$('.link-header__list').eq(i);
            var obj_children=Math.round($(obj).children().length / 7);
            if($(obj).children().length < 7){
               $(obj).css({'grid-template':'repeat('+$(obj).children().length+',max-content)/repeat('+obj_children+',max-content)'});
            }else{
               $(obj).css({'grid-template':'repeat(7,max-content)/repeat('+obj_children+',max-content)'})
            }
            
         }  
      }
      if(window.innerWidth < 1100){
         $('.link-header ').on('click',function(){
            $(this).toggleClass('action');
            $(this).children('.link-header__list').toggleClass('open');

         });
         
      }
      
      if(window.innerWidth > 767 && window.innerWidth < 1100){
         $('.info-header__leng').insertAfter('.bottom-header__logo');
      }
      

      if(window.innerWidth < 1100){
         $('.top-header__button').insertAfter('.social.header');
        
      }

      if(window.innerWidth > 1100){
         $('.top-header__button').insertAfter('.top-header__info');
         
      }

      if(window.innerWidth < 767){
         $('.top-header__info').insertBefore('.header__list');
         $('.info-header__city').insertAfter('.info-header__tel');
         $('.info-header__leng').insertAfter('.info-header__city');
      }
      if(window.innerWidth > 1100){
         $('.top-header__info').insertAfter('.top-header__logo');
         $('.info-header__leng').insertBefore('.info-header__city');
      }

     if(window.innerWidth > 767){
      $('.top-header__info').insertAfter('.top-header__logo');
      var width_select=$(".select__list").innerWidth() - 40;
      $('.select').css('width',''+width_select+'px');
     }
   }
   header();
   $(window).on('resize',header);


   $('.header__burger').on('click',function(){
      $('.header__bottom').toggleClass('action');
      $('.header__burger').toggleClass('action');
      $('.header-bg').toggleClass('action');
      $('body').toggleClass('scroll-off');
      $('.header__bottom').toggleClass('scroll-on');
   })

   /*slider*/
   var count=0;
   function Slider(){ 
      var length=$('.box-img-slider__images img').length -1;
         $('.content-slider__around').on('click',function(){
            $('.content-slider__around').removeClass('action');
            $(this).addClass('action');
            var num =$(this).index();
            slide(num);
         });
         var length=$('.box-img-slider__images img').length -1;
      var y1;
      var y2;
      $('.slider__body').on("touchstart",function(e){
         y1= e.originalEvent.touches[0].pageX;
      })
      var pos =" ";
      $('.slider__body').on("touchmove",function(e){
         y2= e.originalEvent.touches[0].pageX;
  
      })
      $('.slider__body').on("touchend",function(){
         if(y1 < y2){ 
            
            count < length ? count=0:count--;
            slide(count);
         }
         if(y1 > y2){
            count < length ? count++:count=length;
            slide(count);
            
         }
      })
      
      function next(){
         count < length ? count++:count=0;
         slide(count);
         setTimeout(next,3000);
      }
      next();
   }
   Slider();
   function slide(num){
      var content_width=$('.slider__content').innerWidth();
      var img_width=$('.box-img-slider__images img').innerWidth();
      $('.slider__contents').animate({scrollLeft : content_width * num},400);
      $('.box-img-slider__images').animate({scrollLeft : img_width * num},400);
      $('.content-slider__around').removeClass('action');
      $('.content-slider__around').eq(num).addClass('action');
   }
   


   $('.survey__tab').on('click',function(){
      $('.survey__tab').removeClass('action');
      $(this).addClass('action')
   })

   $('.content_toggle').click(function(){
		$('.content_block').toggleClass('hide');	
		if ($('.content_block').hasClass('hide')) {
			$('.content_toggle').html('показать больше');
		} else {
			$('.content_toggle').html('Скрыть');
		}		
		return false;
	});


   


   /*------------------------- anchor -----------------------*/
   $('.col-page-desc__button').on('click',function(){
      $('html').scrollTop($('.form').parent().parent().offset().top);
   })

   /*для попап */
   console.log($('.col-feedback__text .text-p-14').prop('scrollHeight'));
   /*----------------------------------*/

   /* ----------------- accordion --------------------*/
   $('.menu-accordion__link').on('click',function(){
      $('.menu-accordion__link').removeClass('action');
      $(this).addClass('action');
   })
   $('.item-acccordion__top').on('click',function(e){
      $(this).next().slideToggle(300);
      $(this).parents('.col-accordion__item').toggleClass('open');
   });
})