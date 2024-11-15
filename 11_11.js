let obj = document.getElementById("name");

console.log(obj);

let obj1 = document.querySelector('h1');

console.log(obj1);
console.dir(obj1);


// manipulating attributes


let name1 = document.querySelector('h1');

name1.setAttribute('id','nameofh');

let new1 = document.getElementById("nameofh");

console.log(new1);

// manipulation of style


new1.style.color = 'red';


// classList

let heading  =  document.querySelector("h1");

heading.classList.add("newclass");

console.log(heading.classList);


let newp = document.createElement("p");

newp.innerText = "hii, i am new para";

let body = document.querySelector("body");

body.appendChild(newp);  // add at the last

// add the starting

let newh = document.createElement("h1");

newh.innerText = "add new element at starting";

body.prepend(newh);

// insert at define location


