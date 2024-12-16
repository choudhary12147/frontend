

// Transform an array of key-value pairs [["name", "John"], ["age", 25]] into an object.


let arr = [["name","john"],["age",25]];

let obj = {};

arr.forEach( ([key , value]) => {
       obj[key] = value;
});

console.log(obj);

/*
 Transform this key-value pair array into an object where one of the values is itself an object:
const data = [["id", 1], ["details", { gender: "female", status: "active" }]];
{ id: 1, details: { gender: "female", status: "active" } }

*/


// const data = [["id", 1], ["details", { gender: "female", status: "active" }]];



//   let obj1 = {};

//   data.forEach( ([key,value])=>{
//          obj1[key] = value;
//   })

//   console.log(obj1);


/*
Convert an empty key-value pair array:
const data = [];
Output: {}

*/


const data = [];

let object = {};

data.forEach(({key,value}) => {
       object[key] = value;
})

console.log(object);


/*
Convert an array of objects [{ id: 1 }, { id: 2 }] into an object with id as the key.
// Output: { 1: { id: 1 }, 2: { id: 2 } }

*/


let arrr = [{id:1},{id:2}];





console.log(obj3);
