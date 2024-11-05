

// array methods

// 1 . forEach

let arr = [1,2,3,4,5];

arr.forEach( (el)=>{
      console.log(el);
} );



// 2. map

let double = arr.map((ele)=>{
        return ele*2
});


double.forEach((ele)=>{
      console.log(ele);
});



let std = [
      
    {
        name:"sunil",
        marks:98
    },
    {
        name:"amit",
        marks:87
    }
];



// for convert gpa 

let gpa = std.map((ele)=>{
       return ele.marks /10;
})

gpa.forEach((el)=>{
      console.log(el);
})


// 3. filter

let nums = [2,3,4,5,5,6,7,8];

// let even =  nums.filter( (el)=> {
     
//     if (el%2 == 0) {
//          return el;
//     }

// } );


let even = nums.filter((el) => (el%2 == 0));


even.forEach((el) => {
     console.log(el);
})



// 4. every


let arr1 = [1,2,3,4];

console.log(arr1.every( (el)=> (el%2 == 0)));


console.log(arr1.some((el) => (el%2 == 0)));

console.log(arr1.reduce((res,el) => (res+el)));



// 5. Maximum in Array
 let maxv = arr1.reduce((max,el) => {
       
      if (max < el) {
          return el;
      }else{
        return max;
      }}
      
);

console.log(maxv);

//  all number in array  are multiple of 10 or not

console.log(arr1.every((el) =>(el%10 == 0)));


// min in array

console.log(arr1.reduce((min,el) => {
        if (el < min) {
              
            return el;

        } else {
               return min;
        }
}));


// spread 


console.log(..."helloiamsunil");

let arr2 = [...arr1];

console.log(arr2);



function getele(...args) {
    
      args.push(4);
    
      return args;
    
} 

let args =   getele(2,3,4,4,5);

console.log(args);


function min(a,b,c,d,e) {
      
    console.log(arguments);    

}

min(1,2,3,4,5);


 //  destructuring  of array


 let names = ["tony","bruce","peter","steve"];

 let [winner , runnerup,...others ] = names;

 console.log(winner,runnerup,others);


 // destructuring of object


 const std1 = {
         
         name:"sunildhayal",
         age:23,
        //  sex:"male",
         password:"amitkkk",

 };


//  let { name:stname , password:pass, sex:sexst = "male"} = std1;


 // here sex of std is default

 

// another way

let {name,age,password} = std1;

console.log(name,age,password);