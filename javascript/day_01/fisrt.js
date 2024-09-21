/**  
 *    data type in javascript
 *  1. number 
 *  2. boolean
 *  3. string
 *  4. undefinded
 *  5. Null
 *  6. Bigint
 *  7. Symbol
 * 
 */

let a = 0

console.log(a)

let b = 0

console.log(b)

let c = a/b

console.log(c)

 c+1
 
 console.log(c)



/**
 *   NaN =  not-a-number
 *    0/0 = NaN
 *    NaN - 1 = NaN  
 *    NaN * 1 = NaN
 *    NaN + NaN = NaN
 */



/** boolean */



let isadult = false;

console.log(isadult);

console.log(typeof isadult);




/**
 *   string
 */


let  char = '';  // o/p is string
let  char1 = 'sunil'  // o/p is string

let sentence = " sunil is 'a+' group ";   //this okay no problem

// let sentence1 = 'sunil is 'a' ';         // its generate problem

// let sentence2 = "sunil is "a+"";     // its also genrate problem

console.log(typeof char1)



// string indices


let string = "sunil"

console.log(string[0])

console.log(string[string.length - 2]);


// string concatenation


let newstring = string + " dhayal"

console.log(newstring);

  newstring + 1

  console.log(newstring);



  /**
   *    undefined  ->  A variable that has not been assigned a value is of type undefined.
   */


let value

console.log(value);   //  result is undefined



/**
 *   null -> the value represents the intentional absense of any object value.
 * 
 *   to be explicitly  defined
 * 
 */

let variable = null

console.log(variable)