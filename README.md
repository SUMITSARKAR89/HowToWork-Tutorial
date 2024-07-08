## 1.Accordion

```javaScript
const accordion = document.getElementsByClassName("accordion");
        
        let i;
        for(i = 0; i < accordion.length; i++){
            accordion[i].addEventListener("click", function(){
                this.classList.toggle("on");
                let card = this.nextElementSibling; //sibling element is = "p"//
                if(card.style.maxHeight){
                    card.style.maxHeight = null;
                }else{
                    card.style.maxHeight = card.scrollHeight + "px";
                }
            });

        }


```

## 2.Tab 

```javaScript

const content1 =document.getElementById("content1");
        const content2 =document.getElementById("content2");
        const content3 =document.getElementById("content3");

        const btn1 =document.getElementById("btn1");
        const btn2 =document.getElementById("btn2");
        const btn3 =document.getElementById("btn3");

        function openHtml(){
            content1.style.transform = "translateX(0)";
            content2.style.transform = "translateX(100%)";
            content3.style.transform = "translateX(100%)";
            btn1.style.color = "#fff";
            btn2.style.color = "#000";
            btn3.style.color = "#000";
            content1.style.transitionDelay = "0.3s"
            content2.style.transitionDelay = "0"
            content3.style.transitionDelay = "0"
        }
        function openCss(){
            content1.style.transform = "translateX(100%)";
            content2.style.transform = "translateX(0)";
            content3.style.transform = "translateX(100%)";
            btn1.style.color = "#000";
            btn2.style.color = "#FFF";
            btn3.style.color = "#000"; 
            content1.style.transitionDelay = "0"
            content2.style.transitionDelay = "0.3s"
            content3.style.transitionDelay = "0"
        }
        function openJs(){
            content1.style.transform = "translateX(100%)";
            content2.style.transform = "translateX(100%)";
            content3.style.transform = "translateX(0)";
            btn2.style.color = "#000";
            btn3.style.color = "#FFF";
            btn1.style.color = "#000";
            content1.style.transitionDelay = "0"
            content2.style.transitionDelay = "0"
            content3.style.transitionDelay = "0.3s"
        }
```

## 3. Tab Heading 

```javaScript

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

```

## 4. Menu Navigation Var

```javaScript


const menuBtn = document.querySelectorAll(".menu-btn");
const nav = document.getElementById("nav");
const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".close");

open[0].addEventListener("click", () =>{
    nav.style.left = "0";
    open[0].style.display = "none";
    close[0].style.display = "block"
})

close[0].addEventListener("click", () =>{
    nav.style.left = "-100%";
     open[0].style.display = "block";
    close[0].style.display = "none"

})
```

## 5. Search Filter

```javaScript

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
```