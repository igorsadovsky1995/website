window.onload=()=>{

    
    
    var headerBurger = document.querySelector('.header__burger')
    headerBurger.onclick=()=>{
        var headerNav = document.querySelector('.header__nav')
        headerNav.classList.toggle("open")
        headerBurger.classList.toggle("open")
    }
 

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


    const listMenu = document.querySelectorAll('.header__nav ul li');
    for(list of listMenu){
        if(list.hasChildNodes()){
            
            catchList(list.childNodes)
        }
    }   

    function catchList(obj){
        for(list of obj){
            if(list.hasChildNodes()){
                if(list.tagName == 'UL'){
                    list.parentNode.classList.add('arrow')
                    list.classList.add('sub')
                    if(list.hasChildNodes()){
                        catchList(list.childNodes);
                    }
                }
            }
        }   
    }

    
    document.querySelector(".arrow").addEventListener("click",function(e){
        if(e.target.tagName == "LI")
           e.target.querySelector('.sub').classList.toggle("open")
           e.target.classList.toggle('active');
    })
    
   
    // leng
    document.querySelector('.header__leng').addEventListener('click',(e)=>{
        if(e.target.parentNode == document.querySelector('.header__leng')){
            for(el of document.querySelectorAll('.header__leng span')){
                el.classList.remove('active')
            }
            e.target.classList.add('active')
        }
    })
}