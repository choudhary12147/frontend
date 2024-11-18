
// this for event listener

let btn = document.querySelector("button");

btn.addEventListener("click" , function () {
       
    console.log(this);   // this gives the action btn inner html
});


// redundancy remove using the this keyword


let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");


function changecolor() {
   
      this.style.color = "blue";
       
}


h1.addEventListener("click",changecolor);

h2.addEventListener("click",changecolor);

p.addEventListener("click",changecolor);



// keyword events


let inp = document.querySelector("input");


inp.addEventListener("keydown", function(event){

    //   console.log(event);

      console.log("code is : " + event.code);
      console.log("key is :" + event.key);

    console.log("key was pressed ");

});