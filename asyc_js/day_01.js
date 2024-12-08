

// call back hell

// function savetoDB(data, success, failure) {
         
//     let internetSpeed = Math.floor(Math.random()*10);

//     if (internetSpeed > 4) {
//            success();
//     }else{
//           failure();
//     }

// }
 

// savetoDB("sunil dhayal",()=>{
//     console.log("your data is saved");  
      
//     savetoDB("is a", ()=>{
//           console.log("data 2 is saved");

//               savetoDB("good man ",()=>{
//                   console.log("data3 is saved");
//               },()=>{
//                 console.log("data 3 is not saved");
//               })

//     },()=>{
//           console.log("data2 is not saved");
//     })
    

// } , ()=>{
//     console.log("data is not saved");
// });



// promises


// function savetoDB(data) {
    
//     return new Promise ((resolve,reject) => {
      
//         let internetSpeed = Math.floor(Math.random()*10 +1);

//         if (internetSpeed<4) {
//               resolve("data is saved");
//         } else {
//             reject("data is not saved");
//         }

//     }

// )}


//  let request =  savetoDB("sunil");




// request.then( (result)=> {

//        console.log("promise result :" , result);
//       console.log(" data 1 is saved");

//       return savetoDB("is");

// }).then((result)=>{
//     console.log("promise result :" , result);

//       console.log("data 2 is alsp saved");

// })
// .catch(

//     (error)=>{
//           console.log("promise result" , error);
//           console.log("promise is reject");
//     }
// )


// another method or example of promises


// let firstpromise  = new Promise((resolve,reject)=>{

//          let result = true;

//          if (result) {
//               resolve("done");
//          }else{
//              reject("not done");
//          }
           



// })

// firstpromise.then(()=>{
          
//         console.log("first promise is done");

//         return -1;

// }).then(()=>{
//        console.log("second is done");
// }).catch(()=>{
//        console.log("second is not");
// })



//  example on promises




// let h1 = document.querySelector("h1");

  
//     function colorchange(color) {

//            return new Promise ((resolve,reject)=>{

//             setTimeout(() => {
//                  h1.style.color = color;
                  
//                  resolve("color change");
 
//             }, 1000);
                
//        })
    
//     }
    


//   colorchange('red').then((result)=>{
       
//         console.log(result);

//         return colorchange("green");

//   }).then((result)=>{
//        console.log(result);
//   }).catch((error)=>{
//       console.log(error);

//   })




  //  visualization  of call stack







  function one() {
          return 1;
  }

  function two() {
        return one() + one();
  }




  function three() {
        
          let ans = two() + one();

          console.log(ans);

  }

  three();