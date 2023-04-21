var form = document.getElementById('contact_Right');

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



var allcards = document.querySelectorAll('.wrapper img');

const carousel = document.querySelector('.projectbox');
const fristone = carousel.querySelectorAll('div')[0].clientWidth +1 ;
console.log(fristone);
allcards.forEach(icon=>{
    icon.addEventListener("click",()=>{
    carousel.scrollLeft += icon.id == "forward" ? - fristone: fristone;
    })
})