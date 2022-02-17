//slideshow.js
console.log("Mining etherium");
var slideIndex=1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +=n)
}

// Thumbnail image Controls
function currentSlide(n) {
    showSlides(slideIndex=n);
}
var slideIndex=1;
showSlides();

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    console.log(slides)
    console.log(dots)
    if (n>slides.length){slideIndex=1}
    if (n<1) {slideIndex = slides.length}
    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log(slides[slideIndex-1])
    
}
