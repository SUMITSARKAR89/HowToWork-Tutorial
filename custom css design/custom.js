// ==========================parallax===============================

const parllax = document.querySelector('#parallax');
window.addEventListener('scroll', () => {

    parllax.style.baacgroundPositionY = `${scrollY / 1.5}px`;
});
const h1 = document.querySelector('body h1');

h1.addEventListener('mouseover', () => {
    if(h1.innerHTML = " Hello. Welcome to custom design" ){
        h1.innerHTML = "Scroll down";
        h1.style.backgroundColor = "green";
        h1.style.color = "#fff";
    }else{
        h1.innerHTML = " Hello. Welcome to custom design" 
    }

});

 // ==========================cursor===============================
 const cursorPointer = document.querySelector(".cursor");

 window.addEventListener('mousemove', (e) => {
 
     let x = e.pageX;
     let y = e.pageY;
 
     cursorPointer.style.left = `${x}px`;
     cursorPointer.style.top = `${y}px`;
 
 
 });

// ==================================
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 100) {
//       document.body.style.backgroundColor = "#8cdde7ec"; // Change background after scrolling 100px
//     } else {
//       document.body.style.backgroundColor = ""; // Revert when scrolling back up
//     }
//   });

//==================================
function menu(x){
    x.classList.toggle("change");
};
//==================================

var toggler = document.getElementsByClassName("tree");

var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active-t");
    this.classList.toggle("tree-down");
  });
}



//================== dark mode ================


const body = document.querySelector('body');
const dark = document.querySelector('#dark');

dark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


// ====================== menu mouse over========================

const myLink = document.getElementById("my-link");
const memuMobile = document.getElementById("menu-mobile");
const mobileBody = document.getElementById("mobile-body");

memuMobile.addEventListener("mouseover", function(){
    if(myLink.style.display === "flex"){
        myLink.style.display = "none";
        mobileBody.style.marginTop = "0";
    }else{
        myLink.style.display = "flex";
        mobileBody.style.marginTop = "140px";
    }
})

// ===========================video btn============================

function videoBtn(){
    const playBtn = document.querySelector('.video-btn');
    const myVideo = document.querySelector('#video');

    if(myVideo.paused){
        myVideo.play();
        playBtn.innerHTML = "Pause";
        playBtn.style.backgroundColor = '#fff';
        playBtn.style.color = '#000';
    }else{
        myVideo.pause();
        playBtn.innerHTML = "Play"
        playBtn.style.backgroundColor = 'green';
        playBtn.style.color = '#fff';
    }
};
// =======================================================


// =======================================================
/**/
//=========================alert box=============================

const close = document.getElementsByClassName("closebtn");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var a = this.parentElement;
    a.style.opacity = "0";
    setTimeout(() => { a.style.display = "none"; }, 600);
  }
};

/*for(let i = 0; i< close.length; i++){
    close[i].addEventListener('click', () => {
        this.parentElement.style.display = "none";
        
    });
}*/

// ===========================progress bar============================
const upload = () => {
    const progressBar = document.querySelector('.progress-bar');
    const uploadContainer = document.querySelector('.upload-container');
    const on = document.querySelector('.p-on');

    progressBar.classList.add('play-animation');
    // uploadContainer.style.display = 'block';
        
    on.innerHTML = "Uploaded your photo";
    
    on.addEventListener('click', () => {
        on.innerHTML = '';
        // uploadContainer.style.display = 'none';
        progressBar.classList.remove('play-animation');
    });
}

// ========================fullscreen=======================

const fullImag = document.querySelector('.full-img');
const fullBtn = document .querySelector('#fullscreen-btn');
const full = document.documentElement;
//click btn to active fullscreen
fullBtn.addEventListener('click', () => {
   if(full.requestFullscreen){
    full.requestFullscreen()
   }
});
 // click to deactive fullscreen
window.addEventListener('click', () => {
    if(document.exitFullscreen){
        document.exitFullscreen()
    }
});
// click img to active fullscreen mode image
fullImag.addEventListener('click', () =>{
    if(fullImag.requestFullscreen){
        fullImag.requestFullscreen();
    }
});


// ========================type writes=============

const textWrite = document.querySelector("#type-write");
const dataText = textWrite.getAttribute('data-text');


let count = 0;

window.onload = () =>{
    setText();
};

const setText = () =>{
    setTimeout ( () => {
        textWrite.textContent += dataText.charAt(count);
        count ++;
        if(count <= dataText.length){
            setText();
        }

    },50);
    
};


// ==========================media quary===============================
/*function changBackgroundColor(a) {
    if (a.matches) { 
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  };
  
  var a = window.matchMedia("(max-width: 700px)");
  
  changBackgroundColor(a);
  
  a.addEventListener("change", () => {
    changBackgroundColor(a)
  });*/


//   ==========================================================

const parallaxMouseover = document.querySelector('#parallax-mouseover');
parallaxMouseover.addEventListener("mouseover", e => {
    let x = e.clientX;
    let y = e.clientY;

    let parallaxText = document.querySelector(".parallax-text");

    parallaxText.style.transform = `translate(-${x * 0.05}px, -${y * 0.05}px)`;
    parallaxMouseover.style.baacgroundPositionX = `-${x * 0.09}px`;
    parallaxMouseover.style.baacgroundPositionY = `-${y * 0.09}px`;
})
 




















