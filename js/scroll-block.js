$(document).ready(function(){
   var height_arrey=[];
   
   function scroll_resize(){
      $('.scroll-block__col').css({'height':'100%'});
      for(var i =1;i<= $('.scroll-block__col').length-1;i++){
         
         height_arrey[i]= $('.scroll-block__col').eq(i).height();
         var title_scroll = $('.col-scroll-block__title').eq(i).outerHeight();
         $('.scroll-block__col').eq(i).css({'height':''+title_scroll+'px','z-index':''+15 - i+''});
         console.log(height_arrey[i]);
      }
     
   }  
   

   $(window).on('resize',function(){
      setTimeout(scroll_resize,200);
   });
   setTimeout(scroll_resize,200);
   var count_block_scroll =1;
   $(window).on('scroll',function(){
         var scroll_pos =$('.scroll-block__col').eq(count_block_scroll).offset().top;
         var height = window.innerHeight / 1.3 + $(window).scrollTop() ;
         var add_scroll=height - scroll_pos;
         if(add_scroll < height_arrey[count_block_scroll] ){
            $('.scroll-block__col').eq(count_block_scroll).css({'height':''+add_scroll+'px'})
            $('.scroll-block__col').eq(count_block_scroll).addClass('open');
           
            
         }else{
            
            if(count_block_scroll < $('.scroll-block__col').length-1){
               $('.scroll-block__col').eq(count_block_scroll).css({'height':''+height_arrey[count_block_scroll]+'px'})
               count_block_scroll++; 
               
               
            }
            if(count_block_scroll == $('.scroll-block__col').length-1){
               $('.scroll-block__col').eq(count_block_scroll).css({'height':''+height_arrey[$('.scroll-block__col').length-1]+'px'})
            }
         }
         
         
         
         if(add_scroll < 0){
            
            $('.scroll-block__col').eq(count_block_scroll).css({'height':''+$('.col-scroll-block__title').eq(count_block_scroll).height()+'px'});
            $('.scroll-block__col').eq(count_block_scroll).removeClass('open');
            count_block_scroll < 0 ? count_block_scroll:count_block_scroll--;
         }
      
      
   })
})