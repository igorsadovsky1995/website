
    // CAROUSEL
    var cont = document.querySelector('.carousel__dots');
    var dots = document.getElementsByClassName('carousel__dot');
    dots[0].classList.add('active');

    let index=0;

    window.addEventListener('resize',()=>{
        controlCarousel(index);
    });

    function controlCarousel(index){
        document.querySelector('.carousel__contents__body').style.cssText=`left: -${document.querySelector('.content-carousel__content').offsetWidth * index}px`;
        document.querySelector('.carousel__image-body').style.cssText=`left: -${document.querySelector('.carousel__image').offsetWidth * index}px`;
        for(e of document.querySelectorAll('.carousel__dot')){
            e.classList.remove('active')
        }
        dots[index].classList.add('active');
    }

    cont.addEventListener("click", function(event) {
        index = Array.prototype.indexOf.call(dots, event.target);
        controlCarousel(index)
    });


    let touchEvent;
    document.querySelector('.carousel').addEventListener('touchstart',(e)=>{
        touchEvent = e.changedTouches[0].pageX;
       
    })
    document.querySelector('.carousel').addEventListener('touchend',(e)=>{
        if(touchEvent  > e.changedTouches[0].pageX){
            index < document.querySelectorAll('.carousel__dot').length-1 ? index++:index=document.querySelectorAll('.carousel__dot').length-1;
        }else{
            index > 0 ? index--:index=0;
            
        }
        controlCarousel(index)
    })
