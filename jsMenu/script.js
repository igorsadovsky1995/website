document.addEventListener("DOMContentLoaded", () => {
    function size(){
        if(window.innerWidth < window.innerHeight){
            document.querySelector('body').classList.add('mobil');
            document.querySelector('*').style.cssText='font-size: calc(16 * 100vw / 320);';
        }else{
            document.querySelector('*').style.cssText='font-size: calc(16 * 100vw / 1920);';
            if(document.querySelector('body').classList.contains('mobil')){
                document.querySelector('body').classList.remove('mobil');
                
            }
        }
    }

    size();

    window.addEventListener('resize',()=>{
        size();
    })
});