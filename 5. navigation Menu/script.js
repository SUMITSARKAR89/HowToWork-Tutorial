
const menuBtn = document.querySelectorAll(".menu-btn");
const nav = document.getElementById("nav");
const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".close");

open[0].addEventListener("click", () =>{
    nav.style.left = "0";
    open[0].style.display = "none";
    close[0].style.display = "block"
})

close[0].addEventListener("click", () =>{
    nav.style.left = "-100%";
     open[0].style.display = "block";
    close[0].style.display = "none"

})