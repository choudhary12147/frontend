
console.log(typeof test);

var test = function() { 
        return 5;
 }

 //Q.2

 let x = 5;

 function scopeTest() {
  console.log(x);
   var x = 10;
}

scopeTest();  //  o/p = 10  no due to hosting undefined

//Q.3

function createIncrementer() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  
  let increment = createIncrementer();
  console.log(increment());
  console.log(increment());

  //Q.4

  function blockScope() {
    let x = 10;

    if (true) {
      let x = 20;
      console.log(x);
    }
    console.log(x);
  }

  blockScope();

  // Q.5

  console.log(foo);
 var foo = 10;

 //Q.6

 function outer() {
    var outerVar = "outer";
    return function inner() {
      console.log(outerVar);
    };
  }
  var innerFunc = outer();
  innerFunc();

  //Q.7

  let a = 10;
function shadow() {
  let a = 5;
  console.log(a);
}
shadow();

// o/p =  5;

//Q.8

// function outerFunc() {
//     let count = 0;
//     return {
//       increment: function() {
//         count++;
//         console.log(count);
//       },
//       decrement: function() {
//         count--;
//         console.log(count);
//       }
//     };
//   }
  
//   let counter = outerFunc();
//   counter.increment();
//   counter.decrement();


  //Q.9

  function outerFunc() {

    let x = 10;

    function innerFunc() {
      console.log(x);
    }
     
    return innerFunc;
  }

  let result = outerFunc();
  
  result();

  //Q.10
  
function hoistingTest() {
    console.log(x);
    var x = 10;
  }
  hoistingTest();


  //Q.11

  function add(a = 5, b = a * 2) {
    return a + b;
  }
  console.log(add(3));
  console.log(add());