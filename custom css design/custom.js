function menu(x){
    x.classList.toggle("change");
};


// ==============================================

const myLink = document.getElementById("my-link");
const memuMobile = document.getElementById("menu-mobile");
const mobileBody = document.getElementById("mobile-body");

memuMobile.addEventListener("click", function(){
    if(myLink.style.display === "flex"){
        myLink.style.display = "none";
        mobileBody.style.marginTop = "0";
    }else{
        myLink.style.display = "flex";
        mobileBody.style.marginTop = "140px";
    }
})
