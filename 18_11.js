let form = document.querySelector("form");


// form.addEventListener("submit", function (event) {
       
//        event.preventDefault();      /// this function prevent default allow us to go new url
//       console.log("form is submitted");
   
//        let inp = document.querySelector("input");

//        console.dir(inp);


// });





// extracting


// form.addEventListener("submit", function (event) {
       
//     event.preventDefault();      
  

//     let inp = document.querySelector("input");

//     console.dir(inp);
//     console.log(inp.value);


// });



// extracting form data




form.addEventListener("submit", function (event) {
       
    event.preventDefault();      
  
     console.log(form.elements[0]);


});
