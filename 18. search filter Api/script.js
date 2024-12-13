function searchOn() {
    const input = document.getElementById('find').value.toUpperCase();; 
    // const filter = input.value.toUpperCase(); 
    const products = document.getElementById('products'); 
    const productCards = products.querySelectorAll('.product-card'); 
    
    // Loop through each product card
    productCards.forEach((a) => {
        const h3 = a.querySelector('.heading'); 
        const txtValue = h3.textContent || h3.innerText; 
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                a.style.display = '';
            } else {
                a.style.display = 'none';
            }
        }
    );
};

//modal 
const mainImages = document.querySelectorAll(".product-card img");
const modalBody = document.querySelector(".modal");
const modalImages = document.querySelector(".modal-img");
const text = document.querySelector(".modal-text");
const close = document.querySelector(".closed");

//take ForEach loop in images to appear a classlist on their

mainImages.forEach((image) =>{
    image.addEventListener('click', () =>{
        modalBody.classList.add("active");
          
        // //indevidual Title and individual photo
        modalImages.src = image.src;
        text.innerHTML = image.alt; 
        

        close.addEventListener('click', () =>{
            modalBody.classList.remove("active");
        });
    });

});
