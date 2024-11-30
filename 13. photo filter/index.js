const btnContainer = document.getElementById("myBtnContainer");
const buttons = btnContainer.querySelectorAll(".btn");
const columns = document.querySelectorAll(".column");

const mainImage = document.querySelectorAll(".grid img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-img");
const closed = document.querySelector(".closed"); 
const text = document.querySelector(".modal-text"); 


//generate function

  function filterSelection(category) {
  // Show all if category is 'all', otherwise filter by category
  columns.forEach((a) => {
    if (category === "all" || a.classList.contains(category)) {
      a.classList.add("show");
    } else {
      a.classList.remove("show");
    }
  });
}
// Initialize to show all
filterSelection("all");

                                                                       
// Add active class to the clicked button

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    buttons.forEach((i) => i.classList.remove("active"));
    // Add 'active' class to the clicked button
    btn.classList.add("active");
  });
});

// modal image
mainImage.forEach((image) => {
  image.addEventListener('click', () =>{
    modal.classList.add("on");

    modalImage.src = image.src;
    text.innerHTML = image.alt;

    closed.addEventListener('click', () =>{
      modal.classList.remove("on");
    });
  });
});












