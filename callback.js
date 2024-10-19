
/**
 * Write a function add that accepts two numbers and a callback. The callback should print the sum of the two numbers.
 */


function sumofnum(sum) {
    
    console.log(`the sum of number is ${sum}`);
    
}



function add(num1,num2,callback) {
     
    let sum = num1 + num2;

    callback(sum);

}

add(2,3,sumofnum);


/**
 * Create a function subtract that takes two numbers and a callback. 
 * The callback should return the difference of the two numbers.
 */


function diff2num(n1,n2) {
      return n1-n2;
}


function subtract(n1,n2,callback) {

      let difference = callback(n1,n2);

      console.log(difference);
    
}

subtract(3,1,diff2num);



/**
 *  Implement a function multiply that accepts two numbers and a callback to print the product.
 * 
 */


function printpro(product) {
        
      console.log(product);
}


function multiply(no1,no2,callback) {
     
    let product = no1*no2;

    callback(product);
}


multiply(3,4,printpro);


/**
 * 
 * Write a function divide that accepts two numbers and a callback to return the quotient.
 */


function rquotient(q){
        console.log(q);
}

function divide(no1,no2,callback){
    
      let q = no1/no2;

      callback(q);

}


divide(10,5,rquotient);




/**
 * Create a function fizzBuzz that takes a number and a callback to print "Fizz" for multiples of 3,
 *  "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both
  */


function print(number) {
    
    if (number%3 == 0) {
         console.log("Fizz");
    }else if (number%5 == 0) {
        console.log("Buzz");
    }else{
        console.log("FizzBuzz");
    }

}

function fizzBuzz(number,callback){

       callback(number);    

}

fizzBuzz(35,print);





/**
 * Create a function isPrime that takes a number and a callback to check if it is a prime number.
 */




function check(num) {
      if (num%2 == 0) {
         
        console.log("prime");

      } else {
        console.log("not prime");
      }
}


function isPrime(num , callback) {
      callback(num);
}


isPrime(12,check);




/**
 * Implement a function findFactorial that takes a number and a callback to return its factorial.
 */

function factorial(num) {

       if (num >= 1) {
        
        return num*factorial(num-1);
       
       }else{
         return 1;
       }
       
       

}



function findFactorial(number , callback) {
              let fact =   callback(number);
              console.log(fact);
}

findFactorial(4,factorial);