let buttons = document.getElementsByClassName('btn');
let content = document.getElementsByClassName('menuDivs');

buttons[0].addEventListener('click',function(){
    content[0].classList.toggle('active');
})

buttons[1].addEventListener('click',function(){
    content[1].classList.toggle('active');
})

buttons[2].addEventListener('click',function(){
    content[2].classList.toggle('active');
})

buttons[3].addEventListener('click',function(){    
    content[3].classList.toggle('active');   
})


        
