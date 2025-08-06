const Slides = document.querySelectorAll('.slide');
let slideIdx = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initSlider)

function initSlider(){
    if (Slides.length > 0){
        Slides[slideIdx].classList.add('display');
    }
   
}
function ShowSlide(beforeIdx, newIdx){
    Slides[beforeIdx].classList.remove('display');
    Slides[newIdx].classList.add('display');
    slideIdx = newIdx
}
function Prev(){
    ShowSlide(slideIdx, (slideIdx + 15 )% 4);
}
function Next(){
    ShowSlide(slideIdx, (slideIdx +1) % 4)
}
