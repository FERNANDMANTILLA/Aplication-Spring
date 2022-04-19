let first = document.querySelector('.first');
const texts =["Creativity Skilled Compromising Self Taught"];
var index = 0;
var count = 0;
let currentText = "";
var splitText = "";
var about = document.getElementById('about');
var aboutY = 0;



window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(type,3000);
});

function type(){
    currentText=texts[count];
    splitText=texts[count].slice(0,++index);
    first.textContent = splitText;
    if(splitText == currentText.length){
        count++;
        index=0;
    }
setTimeout( type,100);}


