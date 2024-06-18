let DayNight = document.querySelector(".DayNight");
let contactMe = document.querySelector(".contact-me");

DayNight.addEventListener("click", () => {
    contactMe.classList.toggle("night");
});
