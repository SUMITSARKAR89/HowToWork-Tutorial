//set variable

const mainImages = document.querySelectorAll(".images img");
const modalBody = document.querySelector(".modal");
const modalImages = document.querySelector(".modal-img");
const text = document.querySelector(".modal-text");
const close = document.querySelector(".closed");

//take ForEach loop in images to appear a classlist on their

mainImages.forEach((image) =>{
    image.addEventListener('click', () =>{
        modalBody.classList.add("active");
          
        //indevidual Title and individual photo
        modalImages.src = image.src;
        text.innerHTML = image.alt; 
        //

        close.addEventListener('click', () =>{
            modalBody.classList.remove("active");
        });
    });

});

// create indevidual Title and individual photo
