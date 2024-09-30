
function rolldices() {
      
    return Math.floor(Math.random()*6)+1;

}


console.log(rolldices());

function printinfo(name , age) {
      
    console.log(`name is ${name} and age is ${age}`);
    
}


printinfo("sunil" , 23);


/**
 *   average of three number
 */


function average(a,b,c) {
      
    return (a+b+c)/3;
}

console.log(average(4,5,6));


// function for multipliction of table


function table( n ) {
      
    for (let i = 1; i <= 10; i++) {
          
        console.log(n*i);
          
    }

}


table(2);


// function return the sum of number from 1 to n

function sum(n) {
      
     let sum = 0;

     for (let i = 1; i <=n; i++) {
        
        sum+=i;
          
     }

     return sum;
}

console.log(sum(5));



// return concatenation of all string in an array

function conc( arr ) {

     let conc = "";
     
     for (let i = 0; i < arr.length; i++) {
        
          conc += arr[i];
        
     }

     return conc;

}



let arr = ["hii" , "i" , "am " , "sunil"];

console.log(conc(arr));



/**
 * 
 *   scope of function -> scope determines the accessibility  of variables , objects and functions from different parts
 *                       of the code.
 *   
 *   1. function scope  -> variable definded inside a function are not accessible(visible) from outside the function
 *   2. block  scope ->  variable declare inside a block cant't we accessed from outside the block{}
 *   3. lexical scope -> variable defined outside a function can be accessible inside another function defined after the variable
 *                        but opposite is not accessible
 *  
 */


//  let sum = 0;  // it have global scope we use this every where in any function


function addnum(a,b) {
     let sum = a+b;  // we use this sum varibale only in this func.
   
    //  console.log(sum);  // this sum print the value of func sum not from outside  and if there is no variable of sum inside this func 
                    // global scope sum is print
    
    }

addnum(1,2);



// example of block scope

let age = 25;

if (age >= 18) {
      let str = "adult";
}

// console.log(str);  // can't print the value of str because it have the block scope


// example lexical scope


function outer() {
    
let name = "sunil";

function inner() {
      
      console.log(name);
    //   console.log(surname);  // cant' we accessible because surname declare after the inner func.
      
}
   inner();


  let surname = "dhayal";
}

outer();


// function expression  -> it is just a another way right a function
// after that we pass this func as a arrgument and return


// example of function expression

 let hello =  function () {
        
     console.log("hello g");
 }

 hello();


 //  higher order function  -> take one or multiple function as a arguments


 function multipleGreet(func , n ) {
     
    for (let i = 0; i <= n; i++) {
       
           func();
        
    }

 }

 let greet =  function() {
      console.log("namaste");
 }

 multipleGreet(greet,5);



 // higher order function  returns a function



 function oddevenfac(request) {
    
        if (request == "odd") {
                    
           let odd = function (n) {
              console.log(!(n%2 == 0));
           }

           return odd;

        } else if(request == "even") {
               
            let even = function (n) {
                  console.log(n%2 == 0);
            }
               
            return even;

        }else{
              console.log("wrong request");
        }

 }


 let func = oddevenfac("odd");     // oddevenfac return func according to the request and store in func

 func(5); // it func accor. to func which is in the oddevenfac


 // action that can be performed on object


let calculator = {

   add: function add(a,b) {
        return a+b;
   },
   sub: function sub(a,b) {
       return a-b;
   },
   mul: function mul(a,b) {
       return a*b;
   }

};

console.log(calculator.add(4,5));




/**
 *  Qs1. Write a JavaScript function that returns array elements larger than a number.
 */


function element(num , array) {

  let newarr = []; 
     
    for (let i = 0; i < array.length; i++) {
             
        if (array[i] > num) {
             
             newarr.push(array[i]);
        }
            
    }

    return newarr;

}

let num = 5;

let array = [8,9,10,11,25];

console.log(element(num,array));

