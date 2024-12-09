const nextBtn = document.querySelector(".btn-nxt");
const prevBtn = document.querySelector(".btn-prv");
const submitBtn = document.querySelector(".btn-submit");

const progressStep = document.querySelectorAll(".step");
const formStep = document.querySelectorAll(".from-step");



let active = 1 ;
length = progressStep.length;

//next btn
nextBtn.addEventListener('click', () => {
    active++;
    if(active > length){
        active = length;
    }
    updateProgressStep();
});

//previous btn
prevBtn.addEventListener('click', () => {
    active--;
    if(active < 1){
        active = 1;
    }
    updateProgressStep();
});


const updateProgressStep = () => {
    //toggle active class by using loop
    progressStep.forEach((event, i) => {
        
        if (i ==(active-1)){
            event.classList.add('active');
            formStep[i].classList.add('active');
           
        } else{
            event.classList.remove('active');
            formStep[i].classList.remove('active')
        }
    });


    //button enable or disable
    if (active === 1){
        prevBtn.disabled = true;
    }else if (active === length){
        nextBtn.disabled = true;
    }else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}