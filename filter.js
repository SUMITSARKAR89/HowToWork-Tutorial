function searchInput(){
    const input = document.getElementById("search");
    const ul = document.getElementById("myMenu");
    const li = ul.getElementsByTagName("li");

    const filter = input.value.toUpperCase();
    // console.log(input, ul, li);

    for(let i = 0; i< li.length; i++){
        const a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }

    }

}