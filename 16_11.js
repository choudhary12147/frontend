let btn = document.querySelector("button");

btn.onclick = function () {
    console.log("button was clicked");
};

btn.onclick = clicked;

function clicked() {
     console.log("clicked");
}


// event listener


let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",function () {
    console.log("new btn was clicked");
});