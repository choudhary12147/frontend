let gameseq = [];
let userseq = [];

let btns = [yellow , red , purple , green];

let start =  false;
let level = 0;


document.addEventListener("keypress",function () {
      
       if (start ==  false) {
          console.log("game is started");
          start =  true;
       }

       levelup();
    
});



function levelup() {
       level++;

     let h3 = document.querySelector("h3");

     h3.innerText = `level ${level}`;

     let randidx =  Math.floor(Math.random()*3);

     console.log(randidx);

     let randcolor =   btns[randidx];

     console.log(randcolor);
     let btn =  document.querySelector(`.${randcolor}`);

     gameseq.push(btn);

     btnflash(btn);
}

function btnflash(btn) {
     
      btn.classList.add("flash");

      setTimeout(() => {

           btn.classList.remove("flash");     

      }, 1000);

}


function userflash(btn) {
     
    btn.classList.add("userflash");

    setTimeout(() => {

         btn.classList.remove("userflash");     

    }, 1000);

}


// on press button


function btnpress() {

      console.log("button is pressed");

       let btn = this;

       userflash(btn);

}



let allbtns =  document.querySelectorAll(".btn");

for( btn of allbtns){

     btn.addEventListener("click", btnpress());    

}