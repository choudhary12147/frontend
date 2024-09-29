
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
 *   of the code.
 *  
 */

