let Daynight = document.querySelector(".DayNight");
let banner = document.querySelector(".banner");

Daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})


//included library from git for typing effect
let typingEffect = new Typed("#text",{
    strings:["Ankit Priyam","Coder","Developer","Web Aficionado"," Data Buff","Software Enthusiast"],
    loop:true,
    typeSpeed:100,
    backDelay:1500
})