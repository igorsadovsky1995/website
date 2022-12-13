
    var headerBurger = document.querySelector('.header__burger')
    headerBurger.onclick=()=>{
        var headerNav = document.querySelector('.header__nav')
        headerNav.classList.toggle("open")
        headerBurger.classList.toggle("open")
    }
 

    

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
