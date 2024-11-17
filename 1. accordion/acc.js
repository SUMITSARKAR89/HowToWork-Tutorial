 
        /*keyword
         start with loop
        1.toogle
        2. nextElementSibling
        3. scrollHeight
        4. loop
        5. if else
        */

       

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

        /* const accordion = document.getElementsByClassName("accordion");
        // step-1
        let i;
        for(i=0; i< accordion.length; i++){
        // step-2
            accordion[i].addEventListener("click", function(){
                this.classList.toggle("on")
        // step-3        
                let a = this.nextElementSibling;
                if(a.style.maxHeight){
                    a.style.maxHeight = null;
                }else{
                    a.style.maxHeight = a.scrollHeight + "px"
                }
            })
        }*/
