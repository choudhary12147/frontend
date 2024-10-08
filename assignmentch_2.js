
/** Create a function greet that takes two positional arguments: name and greeting, and 
returns a personalized greeting message. */


function func( name , greeting) {
    
    return `hello ${name} ${greeting}`;

}

  console.log(func("sunil" , "namaste"));



/**Write a function calculatePrice that takes two arguments: price and taxRate.
 If taxRate is not provided, it should default to 5%.*/

 function calculatePrice(price,taxRate = 5) {
      

       let finalprice =   price + (price*taxRate)/100;
   
       return finalprice;
 }


     console.log(calculatePrice(100,25));




/**Create a function sumNumbers that takes an unknown number of arguments
 using the rest operator and returns their sum.*/

   function sumNumbers(...num) {

      let sum = 0;

        for (let n of num) {
               
            sum+=n;
        }
                  
    return sum;
   }

   console.log(sumNumbers(1,2,3,4));


/**Create a function introduce that takes three positional
 arguments: firstName, lastName, and age, and returns a sentence introducing the person.
*/

function introduce(firstName,lastName,age) {
      
    return `i am ${firstName} ${lastName} and i am ${age} year old`;
}

console.log(introduce("sunil" , "dhayal" , 23));




/**  Write a function makeSandwich that takes two arguments: breadType and filling. 
 The default value for breadType should be "whole whe */


 function makeSandwich( breadType = "whole whe" , filling) {
        
         console.log(` bread type is ${breadType} , and filling is ${filling}`);
    

 }


console.log( makeSandwich(undefined,"chess"));


/**
 Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, 
     and returns the result of multiplying them
 * 
 */

     function multiply(x , y = 1) {
         
        return result = x*y;
     }

     console.log(multiply(2,3));