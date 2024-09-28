

let arr = ["sunil" , 23 , "male"];

let arr1 = {
         
     name : "sunil",
      age : 23,
      sex : "male"

};

const arr2 = {
         
    name : "sunil",
     age : 23,
     sex : "male"
      
};

/** math object
 *  
 */

/**
 *  random integer
 */



let step1 = Math.random();

let step2 = step1*10;

let step3 =  Math.floor(step2);  // gives number in range of 0 to 9

let step4 = step3+1;   // for generate integer between  from 1 to 10 

console.log(step4);


/**
 *  in short
 */


let integer =   Math.floor(Math.random()*5) +1 ;

console.log(integer);

/**
 *  Qs1. Create a program that generates a random number representing a dice roll.
           [The number should be between 1 and 6].
 */

           let dicenum = Math.floor(Math.random()*6) + 1;

           console.log(dicenum);


           /**
            * Qs2. Create an object representing a car that stores the following properties for the
                  car: name, model, color.
                   Print the car’s name.
            */

                   const car = {
                      name: "bmw",
                      model: 2018,
                      color: "red"
                   }

                 
              /**
               *  Qs3. Create an object Person with their name, age and city.
                        Edit their city’s original value to change it to “New York”.
                         Add a new property country and set it to the United States.
               *  */     


                 const Person = {
                      name: "sunil",
                      age: 23,
                      city:"ringus"
                 }        


                 Person.city = "new york";

                 Person.country = "United States";