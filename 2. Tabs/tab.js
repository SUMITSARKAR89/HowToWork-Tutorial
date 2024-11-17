const content1 =document.getElementById("content1");
const content2 =document.getElementById("content2");
const content3 =document.getElementById("content3");

const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");

function openHtml(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";

    btn1.style.color = "#fff";
    btn2.style.color = "#000";
    btn3.style.color = "#000";

   

    content1.style.transitionDelay = "0.3s"
    content2.style.transitionDelay = "0"
    content3.style.transitionDelay = "0"
}
function openCss(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";

    btn1.style.color = "#000";
    btn2.style.color = "#FFF";
    btn3.style.color = "#000";

   
    
    content1.style.transitionDelay = "0"
    content2.style.transitionDelay = "0.3s"
    content3.style.transitionDelay = "0"
}
function openJs(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";

    btn2.style.color = "#000";
    btn3.style.color = "#FFF";
    btn1.style.color = "#000";

    content1.style.transitionDelay = "0"
    content2.style.transitionDelay = "0"
    content3.style.transitionDelay = "0.3s"
}

