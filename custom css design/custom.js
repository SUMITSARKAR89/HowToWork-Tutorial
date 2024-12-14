function menu(x){
    x.classList.toggle("change");
};


// ==============================================

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

// =======================================================

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
const modalBody = document.querySelector(".modal-box-body");
const modalBtn= document.querySelector("#modal-btn");
const markCencel = document.querySelector("#mark-cencel");
const modalBox = document.querySelector("#modal-box");

modalBtn.addEventListener('click', () => {
    modalBody.style.display = "block";
    modalBox.style.backgroundColor = '#ffffff91'
});
markCencel.addEventListener("click", () => {
    modalBody.style.display = "none";
    modalBox.style.backgroundColor = '#fff'
});

const modalDltBox = document.querySelector('.modal-box-dlt');
const markDltCencel = document.querySelector('#mark-cencel-dlt');
const markDltBtn = document.querySelector('#modal-dlt');

const modalResetBtn = document.querySelector("#reset-btn");
const modalSubBtn = document.querySelector("#sub-btn");

markDltBtn.addEventListener('click', () => {
    modalDltBox.style.display = "block";
    modalBox.style.backgroundColor = '#ffffff91'
});
markDltCencel.addEventListener('click', () => {
    modalDltBox.style.display = "none";
    modalBox.style.backgroundColor = '#ffffff'
});


modalResetBtn.addEventListener('click', () => {
    modalDltBox.style.display = "none";
    modalBox.style.backgroundColor = '#ffffff'
});

modalSubBtn.addEventListener('click', () => {
    alert('Account Delete');
    modalDltBox.style.display = "none";
    modalBox.style.backgroundColor = '#ffffff'
});

const toastBtn = document.querySelector('#toast-btn');
const toastContent = document.querySelector('.toast-content');
const toastClose = document.querySelector('#toast-cencel');

toastBtn.addEventListener('click', () => {
    toastContent.classList.add('toast-on');
    setTimeout(() => {
        toastContent.classList.remove('toast-on')
    }, 2600);
});
toastClose.addEventListener('click', () => {
    toastContent.classList.remove('toast-on');
});
//=========================alert box=============================

const close = document.getElementsByClassName("closebtn");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var a = this.parentElement;
    a.style.opacity = "0";
    setTimeout(() => { a.style.display = "none"; }, 600);
  }
}

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


















// const progressBtn = document.querySelector('#progress-btn');
    // progressBtn.addEventListener('click', () => {
    //     progressBar.style.display = 'block';
    // })










// window.onclick = function(event) {
//     if (event.target == modalBody) {
//       modalBody.style.display = "none";
//     }
//   }
