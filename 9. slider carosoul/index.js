const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider= document.querySelector(".slider");
const imageSlide= document.querySelectorAll(".slider-image");

let slideNmber = 1;
const length = imageSlide.length;

/*THIS IS FOR Right SLIDER */
const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNmber*680}px)`;
    slideNmber++; 
};

const getFirstSlide = ()=>{
slider.style.transform = `translateX(0px)`;
slideNmber = 1;
};

right.addEventListener("click", ()=>{
    // if(slideNmber < length){ 
    //     nextSlide() 
    // }else{
    //     getFirstSlide()  
    // }

    slideNmber < length ? nextSlide() :  getFirstSlide();
});


/*THIS IS FOR Left SLIDER */
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNmber-2)*680}px)`;
    slideNmber--; 
};

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*680}px)`;
    slideNmber = length;
};


left.addEventListener("click", ()=>{

    //  if(slideNmber > 1){
    //     prevSlide()
    //  }else{
    //     getLastSlide()
    //  }
    slideNmber > 1 ? prevSlide() :  getLastSlide();
    
});

