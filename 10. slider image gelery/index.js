// == referance ==

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slider = document.getElementById("slider");

// == next btn == 
nextBtn.addEventListener("click", nextPage);
function nextPage(){
    slider.appendChild(slider.firstElementChild);
};

// == privious btn == 
prevBtn.addEventListener("click", previousPage);
function previousPage(){
    slider.prepend(slider.lastElementChild);
};


// == auto slider== 
function autoSlide(){
    autoInterval = setInterval(timer, 2000);
    function timer(){
        nextPage();
    }
    //  setInterval(() => nextPage(), 3000);
} 
autoSlide();
// ==resume suto slider== 
slider.addEventListener("mouseout", autoSlide);
nextBtn.addEventListener("mouseout", autoSlide);
prevBtn.addEventListener("mouseout", autoSlide);


// == stop auto slider== 
slider.addEventListener("mouseover", deleteAutoSlider);
nextBtn.addEventListener("mouseover", deleteAutoSlider);
prevBtn.addEventListener("mouseover", deleteAutoSlider);

function deleteAutoSlider(){
    clearInterval(autoInterval);
};

