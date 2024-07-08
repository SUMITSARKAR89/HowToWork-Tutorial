function showpanel(a,b,c){
    const tabpanel = document.getElementsByClassName("tabpanel");
    for(let i = 0; i< tabpanel.length; i++){
        tabpanel[i].style.display = "none";
    }

    const btn = document.getElementsByClassName("btn");
    for(let i = 0; i< btn.length; i++){
        btn[i].style.backgroundColor = "";
    }
    document.getElementById(a).style.display = "block";
    b.style.backgroundColor = c;
}
document.getElementById("default").click();

//   function showpanel(a, b, c){
//     const panel = document.getElementsByClassName("tabpanel");
//     for(let i = 0; i< panel.length; i++){
//         panel[i].style.display = "none";
//     }

//     const btn = document.getElementsByClassName("btn");
//     for(let i = 0; i< btn.length; i++){
//         btn[i].style.backgroundColor = "";
//     }
//     document.getElementById(a).style.display = "block";
//     b.style.backgroundColor = c;
//   }
//   document.getElementById("default").click();