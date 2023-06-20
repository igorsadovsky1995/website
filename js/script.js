document.addEventListener("DOMContentLoaded", () => {
    /*---------------------Header -------------------------*/

            

    document.querySelector('.header__burger').addEventListener('click',function(){
        document.querySelector('.header__body').classList.toggle('open')
        document.querySelector('body').classList.toggle('off-scroll')
    })

    const navList = document.querySelectorAll('.header__nav li')
    const section = document.querySelectorAll('section')
    for(let i=0;i < navList.length;i++){
        navList[i].addEventListener('click',function(e){
            e.preventDefault()
            document.querySelector('.header__body').classList.remove('open')
            document.querySelector('body').classList.remove('off-scroll')
            console.log(section[i+1].offsetTop ,'----',section[0].offsetTop)
            if(section[i+1]){

                window.scroll(0,section[i+1].offsetTop - window.innerHeight / 20)
            }else{
                window.scroll(0,section[i].offsetTop)
            }
        })
    }

    // Choise lang

    const headerLang = document.querySelectorAll('.header__info .choise-lang span')
    const footerLang = document.querySelectorAll('.info-top-footer__lang .choise-lang span')

    for(let i = 0; i < headerLang.length;i++){
        headerLang[i].addEventListener('click',function(){
            lang(i)
        })
        if(footerLang.length){
            footerLang[i].addEventListener('click',function(){
                lang(i)
            })
        }
        
    }
    function lang(i){
        if(i == 0){
            document.querySelector('.header__info').classList.remove('lang-en')
            document.querySelector('.info-top-footer__lang').classList.remove('lang-en')
            
        }
        if(i == 1){
            document.querySelector('.header__info').classList.add('lang-en')
            document.querySelector('.info-top-footer__lang').classList.add('lang-en')
            
        }
    }

    if(document.querySelector('.project')){
        /*--------------------- TAB -----------------------*/
        const projectTab = document.querySelectorAll('.project__tabs span');
        const contents = document.querySelectorAll('.project__content');
        for(let i = 0 ; i < projectTab.length ; i++){
            projectTab[i].addEventListener('click',function(e){
                removeTabClass ()
                e.target.classList.add('active')
                contents[i].classList.add('content-show');
            })
        }

        function removeTabClass (){
            for(let i = 0 ; i < projectTab.length ; i++){
                projectTab[i].classList.remove('active')
                contents[i].classList.remove('content-show');
            }
        }

        //----------------- POPUP --------------------------

        const buttonPopupAll = document.querySelectorAll('.col-project__button button');
        
        for(let i=0;i <  buttonPopupAll.length;i++){
            buttonPopupAll[i].addEventListener('click',function(){
                document.querySelector('.popup-project').classList.add('action')
                let content = buttonPopupAll[i].parentElement.closest('.project__row')
                let title = content.querySelector('h3')
                let text = content.querySelector('#textPopup')
                let images = content.querySelector('#imagesPopup')

                document.querySelector('.popup-project__body h3').innerHTML=title.textContent;
                addContentPopup(text,document.querySelector('.col-popup-project__text'))
                addContentPopup(images,document.querySelector('.col-popup-project__images'))

                // carousel

                const carouselImages = document.querySelectorAll('.col-popup-project__images img')
                
                let count = 0;
                carouselImages[count].classList.add('show')
                
                document.querySelector('.carousel-next').addEventListener('click',function(){
                    clearImages()
                    count < carouselImages.length-1 ? count++:count=0
                    carouselImages[count].classList.add('show')
                })
                document.querySelector('.carousel-prev').addEventListener('click',function(){
                    clearImages()
                    count > 0 ? count--:count = carouselImages.length-1
                    carouselImages[count].classList.add('show')
                })

                
            })  
        }

        document.querySelector('.popup-project__close').addEventListener('click',closePopup)
        document.querySelector('.popup-project__bg').addEventListener('click',closePopup)
        function closePopup(){
            document.querySelector('.popup-project').classList.remove('action')
            clearImages()
        }

        function addContentPopup(elements,target){
            target.innerHTML=''
            let clone = elements.cloneNode(true)
            target.appendChild(clone)
        }

        function clearImages(){ 
            const carouselImages = document.querySelectorAll('.col-popup-project__images img')
            for(el of carouselImages){
                el.classList.remove('show')
            }
        }
    }
    

});