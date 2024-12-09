
// submit button
const signUpBtn = document.querySelector('.submit-btn'); 
//sign in button
const signInBtn = document.querySelector('.signIn-btn ');
//from box 
const nameField = document.querySelector('.namefield '); 

//others variable
const title = document.querySelector('.title '); //title text
const underline = document.querySelector('.underline '); // underline div
const passText = document.querySelector('.pass-text ');// form peragraph text

//generate open btn function 
let content = document.querySelector('.content');
let openBtn = document.querySelector('.open-button');

function openForm() {
    document.getElementById("modal").style.display = "block";
    content.style.display = "none"; //content
    openBtn.style.display = "none"; //open btn 

};
// generate cross btn function in form box
function closeForm() {
    document.getElementById("modal").style.display = "none";
    content.style.display = "block";//content
    openBtn.style.display = "block"; //open btn

}

// generate sign In button function

signInBtn.addEventListener('click', () =>{
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    underline.style.transform = "translateX(40px)";
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    passText.innerHTML = "Forget Password ?   ";
    passText.style.color = "red";

    //checked text
    const checked = document.querySelector('#checked');
    checked.style.display = "block";
  
});
// generate sign up button function
signUpBtn.addEventListener('click', () =>{
    nameField.style.maxHeight = " 80px";
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = "translateX(0)";
    passText.innerHTML = "Password Suggestion";
    passText.style.color = " #fdfdfd";

    //checked text

    const checked = document.querySelector('#checked');
    checked.style.display = "none";

});

