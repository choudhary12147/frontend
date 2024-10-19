
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

