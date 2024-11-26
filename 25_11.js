
// deep object merging


let arr = [{obj1:1},{obj2:2},{obj3:3}];


let mergeobj = arr.reduce((acc,el)=>{

      return {...acc,...el};
},{});


console.log(mergeobj);

// prime number using filter


