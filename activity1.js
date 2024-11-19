let ul = document.querySelector("ul");

let btn = document.querySelector("button");

let inp = document.querySelector("input");



btn.addEventListener("click",function (){

          let li = document.createElement("li");

          li.innerText = inp.value;

            ul.appendChild(li);  

        console.log(inp.value);

         let delbtn = document.createElement("button");
         
           delbtn.innerText = "delete";

         li.appendChild(delbtn);


        inp.value = "";
    
});

// use event bubbling


ul.addEventListener("click" , function (event) {
           
     if (event.target.nodeName == "BUTTON") {
           
      let listitem = event.target.parentElement;
           console.log(listitem);

           listitem.remove();
     }

});

