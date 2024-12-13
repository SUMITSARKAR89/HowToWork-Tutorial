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
// const progressBtn = document.querySelector('#progress-btn');
    // progressBtn.addEventListener('click', () => {
    //     progressBar.style.display = 'block';
    // })










// window.onclick = function(event) {
//     if (event.target == modalBody) {
//       modalBody.style.display = "none";
//     }
//   }
