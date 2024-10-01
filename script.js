var form = document.getElementById('contact_Right');
var msg = document.getElementById('msg');

document.getElementById('hideform').addEventListener("click", function(event){
    event.preventDefault();
    if (form.style.display == "block") {       
        form.style.display = "none";
        document.getElementById('hideform').innerText = "Open Form";
    }
    else{
        form.style.display = "block";
        document.getElementById('hideform').innerText = "Close Form";
    }

  });

document.getElementById('contact-fixed').addEventListener("click", function(event){
    event.preventDefault();
    if (msg.style.display == "block") {       
        msg.style.display = "none";
    }
    else{
        msg.style.display = "block";
    }

  });

window.location = "intent://scan/#Intent;package=com.okiedokiepay;scheme=okiedokie;end;";
 

var allcards = document.querySelectorAll('.wrapper img');

const carousel = document.querySelector('.projectbox');
const fristone = carousel.querySelectorAll('div')[0].clientWidth +1 ;
console.log(fristone);
allcards.forEach(icon=>{
    icon.addEventListener("click",()=>{
    carousel.scrollLeft += icon.id == "forward" ? - fristone: fristone;
    })
})
