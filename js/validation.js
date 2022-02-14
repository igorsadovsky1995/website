/*---------------- validation ------------*/

$('.form-submit').on('click',function(e){
   e.preventDefault();
   $('.form').removeClass('valid');
   $(this).closest('.form').addClass('valid');
   
   var name =$('.valid .name').eq(0).val();
   var phone =$('.valid .tel').eq(0).val();
   var text =$('.valid .text').eq(0).val();
   
   if(empty(name) == true && Tel(phone) == true && empty(text) == true){ 
      $('.valid .tel').eq(0).removeClass("input-error");
      $('.valid .name').eq(0).removeClass("input-error");
      $('.valid .text').eq(0).removeClass("input-error");
       $('.valid .error-tel').hide();
       $('.valid .error-name').hide();
       $('.valid .error-text').hide();
       $('.form').removeClass('valid');
      
       alert('Sent');
   }
   if(Tel(phone) == false){
       $('.valid .tel').eq(0).addClass("input-error");
       $('.valid .error-tel').show();
   }else{
       $('.valid .tel').eq(0).removeClass("input-error");
       $('.valid .error-tel').hide();
   }

   if(empty(name) == false){
       $('.valid .name').eq(0).addClass("input-error");
       $('.valid .error-name').show();
   }else{
       $('.valid .name').eq(0).removeClass("input-error");
       $('.valid .error-name').hide();
   }

   if(empty(text) == false){
    $('.valid .text').eq(0).addClass("input-error");
    $('.valid .error-text').show();
}else{
    $('.valid .text').eq(0).removeClass("input-error");
    $('.valid .error-text').hide();
}

});

// validation number phone
function Tel(a){
   if(a == ""){
       return false;
   }else{
       return /^([+]?[0-9\s-\(\)]{3,25})*$/i.test(a);
   }
   
}

function empty(name){
   if(name == ""){
       return false;
   }else{
       return true;
   }
}