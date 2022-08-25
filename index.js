const theme = document.querySelector('#icon')

icon.addEventListener('click' , function(e){
    
    if(document.body.classList.contains('dark')){
        e.target.src = 'images/moon.png'
    }else{
        e.target.src = 'images/sun.png'   
    }
    document.body.classList.toggle('dark')
})