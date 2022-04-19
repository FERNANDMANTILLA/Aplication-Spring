let intro = document.querySelector('.intro');
let home=document.querySelector(".home");
let header=document.querySelector(".header");
let logo  = document.querySelector('.logo-header');
let logospan  = document.querySelectorAll('.logo-2');
var song = document.getElementById('song');
var items = document.querySelectorAll('#list li');
var wm = document.getElementById("WorkModal");
window.addEventListener('DOMContentLoaded',()=>{ 
    song.play();  
    setTimeout(()=>{
        logospan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)* 400);
        });
        
        setTimeout(()=>{
            logospan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');

                },(idx+1)*150)
            });
        },2000);

        setTimeout(() => {
            intro.style.top='-100vh';
            setTimeout(()=>{
              home.style.position='relative';
              header.style.position='relative';
              wm.style.display='block';
            },1000);
        }, 2150);
    
    });
     
});

let navbar = document.querySelector('.navbar');
let photo = document.getElementById('photo');
var about = document.getElementById("about");

function disableScroll() {
  scrollTop = 
    window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = 
    window.pageXOffset || document.documentElement.scrollLeft,
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
}

photo.onclick = function(){
  setTimeout(function(){disableScroll()},200);
  about.scrollIntoView(); 
  openModal();
  
}

function openModal() {
    document.getElementById("myModal").style.display = "flex";
    
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    enableScroll();
    about.scrollIntoView();
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
