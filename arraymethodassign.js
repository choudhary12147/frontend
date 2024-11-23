// reduce method -> reduce the array in a single value

let arr = [2,3,4];

let reducearr = arr.reduce((acc,el)=>(acc*el));

console.log(reducearr);

// sort method of array

let arr1 = ["banana","aapple","chery"];

let sortedarr = arr1.sort();

console.log(sortedarr);


//some method -> reture true if some element of array give true for some function. else return false.

let arr2 = [12,24,35,47];

let some = arr2.some((el)=>(el%5 == 0));

console.log(some);


//every method -> reture true if every element of array give true for some function else false


let arr3 = [9,18,27,36];

let every = arr3.every( (el)=> {
      if (el%9 == 0) {
         return true;
      }
});

console.log(every);

// find method ->

let arr4 = [7,-3,9,-8,2];

let find = arr4.find( el => el<0
);

console.log(find);


let arr8 = [{id:1},{id:2},{id:3}];

let obj =  arr8.find(el => el.id == 3);

console.log(obj);


// map method   -> used for the  opertion on every element of arr

let arr5 = [1,2,3,4];

let map = arr5.map((el)=>(el*2));

console.log(map);


// filter method ->  return a filter array  for some function

let arr6 = ["Alica","Bob","Amanda","Carl"];


let filter =  arr6.filter((el)=>(el.startsWith("A")));

console.log(filter);


// question on reduce

let arr7 = [[12,23,45],[1,2,3]];

let reducearr7 = arr7.reduce((acc,el)=>(acc.concat(el)));

console.log(reducearr7);

let str =  ["short", "longer", "longest"];

let nstr =  str.sort((el1,el2)=>(el2.length - el1.length ));

console.log(nstr);