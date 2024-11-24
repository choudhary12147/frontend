
/*
  easy phase

  */


// find index 


let num = [2,4,6,9,12];

console.log(num.findIndex((n)=>(n%2 == 0)));

/*
Use some to check if there is any number greater than 100 in [10, 20, 30, 150]. */

let num1 = [10,20,30,150];

let isnum =num1.some(el=> el>100);

console.log(isnum);

/*
Use every to check if all numbers in the array [5, 10, 15, 20] are multiples of 5.
*/

let num2 = [5,10,15,20];

let isnum1 = num2.every(el=> el%5 == 0);

console.log(isnum1);

/*
Use filter to extract words longer than 3 characters from ["cat", "dog", "fish", "elephant"]
*/

let num3 = ["cat","dog","fish","elephant"];

let newar = num3.filter(el => el.length > 3);

console.log(newar);

/*
Use map to convert an array of prices [10, 20, 30] to include tax (10%).
*/

let num4 = [10,20,30];

let newarr = num4.map(el => el + el+el/10);

console.log(newarr);

/*
Use filter to get names starting with "A" from ["Alice", "Bob", "Amanda", "Carl"].
*/

let num5 = ["Alice","Bob","Amanda","Carl"];

let newnum5 = num5.filter( (el) => (el.startsWith("A")));

console.log(newnum5);

/*
Use sort to sort the numbers [50, 20, 10, 40, 30] in descending order.
*/

let num6 = [50,20,10,40,30];

let sortnum = num6.sort((a,b) => b-a);

console.log(sortnum);

/*
Use reduce to concatenate an array of strings ["Hello", " ", "World"]
*/


let str = ["hello","","world"];

let newstr = str.reduce((acc,el)=>( acc+el),"");

console.log(newstr);

/*
Use findIndex to locate the position of "cat" in ["dog", "cat", "bird"].
*/

let str1 = ["dog","cat","bird"];

let newstr1 = str1.findIndex((el)=> el === "cat");

console.log(newstr1);



/*
medium phase
*/


/*
Use reduce to flatten an array [[1, 2], [3, 4], [5, 6]] into a single array
*/

let  arr1 = [[1,2],[3,4],[5,6]];

let newarr1 = arr1.reduce((acc,el)=>(acc.concat(el)),[]);

console.log(newarr1);

/*
Use map to generate an array of lengths of each word in ["apple", "banana", "cherry"]
*/

let str2 = ["apple","banana","cherry"];

let newstr2 = str2.map( (el)=> (el.length));

console.log(newstr2);


/*
Use findIndex to locate the index of the first number divisible by 7 in [14, 28, 35, 21]
*/

let arr3 = [14,28,35,21];

let idx = arr3.findIndex( el => el == 28);

console.log(idx);

