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
    var widthCarouselContent = document.querySelector('.content-carousel__content').offsetWidth;
    var widthCarouselImage = document.querySelector('.carousel__image').offsetWidth;

    dots[0].classList.add('active');
    cont.addEventListener("click", function(event) {
        var index = Array.prototype.indexOf.call(dots, event.target);
        document.querySelector('.carousel__contents__body').style.cssText=`left: -${widthCarouselContent * index}px`;
        document.querySelector('.carousel__image-body').style.cssText=`left: -${widthCarouselImage * index}px`;

        for(e of document.querySelectorAll('.carousel__dot')){
            e.classList.remove('active')
        }
       
        dots[index].classList.add('active');
    });


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
        console.log(e.target.tagName)
        if(e.target.tagName == "LI")
           e.target.querySelector('.sub').classList.toggle("open")
           e.target.classList.toggle('active');
    })
    
   
}