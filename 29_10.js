

let arr = ["sunil" , 23 , 35.5];

arr.unshift("amit");

// console.log(arr);


arr.shift();

// console.log(arr);

arr.push("rahul");

// console.log(arr);

arr.pop(arr);
// console.log(arr);

let primary = [ "sunil " , "rahul" , "amit" , "anil"];

let secondary = ["vikas" , "sonu" , "rohit"];

// console.log(primary.concat(secondary));


// console.log(primary);

// console.log(secondary);

// primary.reverse();

// console.log(primary);

// primary.slice(1,2);

// console.log(primary);

primary.splice(1,2);

console.log(primary);

primary.sort();

console.log(primary);


let days  = ["sumit","sukh","amit","anil"];

console.log(days.sort());

console.log(days);

let arr1 = [1,2,3,4];

let arr2 = [1,3,5,4];


console.log(arr1[0] === arr2[0]);  

arr2[1] = 2;
arr2[2] = 3;

console.log(arr2);
console.log([1]==[1]);  // return false

const arr3 = [1,2,3];

arr3.push(4);

arr3.pop();
arr3.pop();
console.log(arr3);

// arr3 = [5,6,7];

// console.log(arr3);



const obj = {
      name:"sunil",
      age:23,
      cgpa:7.6

}

obj.name = "amit";

console.log(obj);


// obj = {
//     name:"rahul",
//     age:24,
//     cgpa:8.9
// }
// console.log(obj);



console.log(obj.name);
console.log(obj["name"]);




// closer  -> variable bind or map  with the inner function  not copy the require data only share reference

function outer() {
        
      let name = "sunil";

      function inner() {
         
          console.log(name);
      }

      return inner;

}

let inner = outer();

inner();


/// function expression


// const variable =  function(a,b) {
//         return a+b;
// }


// variable(3,4);


 const object = {

      add: function (a,b) {
             return a+b;
      } ,
      sub: function (a,b) {
            return a-b;
      }
           

 }


   let ans  = object.add(3,4);

   console.log(ans);


   const info = {

       name:"sunil",
       age:23,
       getval: function () {
              console.log(`${this.name} and ${this.age}`);
       },

       getvalue (){
            console.log(`${this.name}`);
       }

   }


   info.getval();

   info.getvalue();
   