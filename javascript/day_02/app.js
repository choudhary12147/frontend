

/**
 *  template literals -> they are use to embedded expression in a string.
 */

let a = 5;
let b = 15;

console.log("sum is " , a*b, "okay");
console.log("sum is " + a*b+ "okay");

console.log(`sum is = ${a+b}`);


/**
 *   conditional statement
 *    if
 *    if-else 
 *    if-elseif-else   similar as c++ 
 *    nested if-else
 * */  



/**
 *   truthy and falsy value -> everything in js is  true or false(in boolean context).
 * 
 *   falsy   
 *        this doesn't mean their value is false or true , but they are treated as falsy values
 *          that is  false , 0,0n,""(empty string), null,undefined,NaN
 *   
 *  truthy values
 *           
 * everything else
 * 
 * 
 */


/**
 *     alert and prompt
 * 
 *   alert -> display an alert message on the page.
 * 
 *  alert("something is wrong")
 */


// alert("some thing is wrong");

// prompt("enter the name");


/** practices */

//1

let num = 20;


if (num/10 == 0) {
      console.log("good");
} else {
    console.log("bad");
}

//2


// let username = prompt("enter the username :");

// let age = prompt("enter the age");

// alert(`your username is ${username} and age is ${age}`);


// 3


let Quarter = 3;

switch (Quarter) {
    case 1:
          console.log("janvuary , february , march");
        break;
     case 2 :
          console.log("april , may , june"); 
          break;  
    case 3:
        console.log("july, august , september");
        break;
    case 4:
          console.log("october , november , december");
        break;
    default :
        break;
}


// 4



let string = "apples";

let length = string.length;

if (length>5 && (string[0] == 'a'|| string[0] == 'A')) {
     
    console.log("golden");

} else {
    console.log("not a golden");
}



//5


let n = 2345;

let last_digit_n = n%10;

let m = 675;

let last_digit_m = m%10;

if (last_digit_n == last_digit_m) {
    
    console.log("same last digit");

} else {
    console.log("not same");
}