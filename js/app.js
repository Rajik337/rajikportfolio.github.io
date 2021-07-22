$(Document).ready(function(){
$('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dorsClass:'dots'});

let hamberger = document.querySelector('hamberger');
let times =document.querySelector('.times');
let mobile-niv =document.querySelector('.mobile-niv');

hamberger.addEventListener('click',function(){
   mobile-niv.classList.add('open');
    });
    times.addEventListener('click',function(){
        mobile-niv.classList.remove('open');  
    });

 
)};