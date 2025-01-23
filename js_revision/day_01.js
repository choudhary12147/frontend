// const users = [
//     { name: "Aman", cart: [100, 200, 150] },
//     { name: "Riya", cart: [2000, 3000, 1000] },
//     { name: "Kunal", cart: [0, 0, 200] },
//   ];


//   let ans = users.find((user)=> {     
//        let value =  user.cart.reduce((acc,el) => acc+el ,0)  
        
//         if (value > 500) {
//             return user;
//         }   
//   }  )


//   console.log(ans);
//   // 2000 > item  and cart price > 5000

//   let ans1 = users.find( (user) => {
        
//        let value = user.cart.reduce((acc,el)=> acc+el , 0);

//         let is_greater = user.cart.some( (el) => el>2000  )
       
//         if (value>500 && is_greater) {
//              return user;
//         }

//   })


//   console.log(ans1);






const users = [
    {
      name: "Aman",
      age: 25,
      orders: [
        { id: 1, items: [{ product: "Laptop", price: 45000 }, { product: "Mouse", price: 800 }] },
        { id: 2, items: [{ product: "Keyboard", price: 1500 }, { product: "Monitor", price: 8000 }] },
      ],
      skills: ["JavaScript", "React", "Node.js"],
      location: { city: "Delhi", country: "India" },
    },
    {
      name: "Riya",
      age: 30,
      orders: [
        { id: 1, items: [{ product: "Phone", price: 20000 }, { product: "Headphones", price: 1500 }] },
        { id: 2, items: [{ product: "Tablet", price: 18000 }, { product: "Charger", price: 500 }] },
      ],
      skills: ["Python", "Django", "Machine Learning"],
      location: { city: "Bangalore", country: "India" },
    },
    {
      name: "Kunal",
      age: 28,
      orders: [
        { id: 1, items: [{ product: "Smartwatch", price: 10000 }, { product: "Phone", price: 15000 }] },
        { id: 2, items: [{ product: "Laptop", price: 40000 }, { product: "Speaker", price: 2500 }] },
      ],
      skills: ["Java", "Spring", "Angular"],
      location: { city: "Mumbai", country: "India" },
    },
    {
      name: "Neha",
      age: 22,
      orders: [
        { id: 1, items: [{ product: "Camera", price: 25000 }, { product: "Tripod", price: 2000 }] },
        { id: 2, items: [{ product: "Laptop", price: 50000 }, { product: "Mouse", price: 1000 }] },
      ],
      skills: ["PHP", "Laravel", "MySQL"],
      location: { city: "Chennai", country: "India" },
    },
  ];


  /*
  Find the first two user who has two or more items in their orders priced above ₹5000, 
  and who has skills related to web development (e.g., JavaScript, React, Angular, etc.).

  */ 
// let ans = users.filter( (user) => {

//       user.orders.map( (el) => {
//                let items_val = el.size;

//                 let price =  el.items.map((e)=> e.price)

//                 if (items_val >=2  && price > 5000) {
//                       return el;
//                 }
//       })
// })

// console.log(ans);


/** oops in js */


//1. object prototypes
// -> it a mechanism by which js objects inherit features from one another
//   it is single template object from which all objects inherit methods and properties without having their own copy



// let arr = [2,3,4,5];

// arr.sayhello = ()=>{
//    console.log("hello");
// }

// let arr1 = [4,5,6];

// arr1.sayhello = ()=>{
//   console.log("hello");
// }

// console.log(arr.sayhello === arr1.sayhello);

// make both different copy because not a prototype its a function which we assign to the array

//but prototype method can't make their different copy

// console.log("abc".toUpperCase == "xyz".toUpperCase )







//2. factory function



// function factoryperson( name , age) {
    
//      const person = {

//          name:name,
//          age:age,
//          talk:function(){
//              console.log(`hello i am ${this.name}`)
//              }
//      }

//      return person;

// }

//  let p1 = factoryperson("sunil",23);
//  p1.talk();
//  console.log(p1);

 // this make multiple person but have drawbacks 

 // that is its make multiple copy of talk() that is not efficent
 //prof
 
//  let p2 = factoryperson("amit",22);

//  console.log(p1.talk === p2.talk);  // return false







 // new operator

 // the new operator
 // constructor -> doesn't return anything & start with capital

// constructor




//  function Person(name,age) {

//          this.name = name;
//           this.age = age; 
//           // console.log(this);
//           // without new keyword this is for the parameter and if new keyword then this is for the person object
//  }

//  Person.prototype.talk = function(){
//     console.log(`i am talking ${this.name} `)
//  }


//  let pa = new Person("sunil",23); 

//  let pb = new Person("amit",22);

// console.log(pa);
// pa.talk();