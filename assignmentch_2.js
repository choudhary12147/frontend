
/** Create a function greet that takes two positional arguments: name and greeting, and 
returns a personalized greeting message. */


function func( name , greeting) {
    
    return `hello ${name} ${greeting}`;

}

  console.log(func("sunil" , "namaste"));



/**Write a function calculatePrice that takes two arguments: price and taxRate.
 If taxRate is not provided, it should default to 5%.*/

 function calculatePrice(price,taxRate = 5) {
      

       let finalprice =   price + (price*taxRate)/100;
   
       return finalprice;
 }


     console.log(calculatePrice(100,25));




/**Create a function sumNumbers that takes an unknown number of arguments
 using the rest operator and returns their sum.*/

   function sumNumbers(...num) {

      let sum = 0;

        for (let n of num) {
               
            sum+=n;
        }
                  
    return sum;
   }

   console.log(sumNumbers(1,2,3,4));


/**Create a function introduce that takes three positional
 arguments: firstName, lastName, and age, and returns a sentence introducing the person.
*/

function introduce(firstName,lastName,age) {
      
    return `i am ${firstName} ${lastName} and i am ${age} year old`;
}

console.log(introduce("sunil" , "dhayal" , 23));




/**  Write a function makeSandwich that takes two arguments: breadType and filling. 
 The default value for breadType should be "whole whe */


 function makeSandwich( breadType = "whole whe" , filling) {
        
         console.log(` bread type is ${breadType} , and filling is ${filling}`);
    

 }


console.log( makeSandwich(undefined,"chess"));


/**
 Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, 
     and returns the result of multiplying them
 * 
 */

     function multiply(x , y = 1) {
         
        return result = x*y;
     }

     console.log(multiply(2,3));


     /**Write a function getTotalPrice that takes an unknown number of prices as arguments
          using the rest operator and returns the total price */


            function getTotalPrice(...prices) {
                
                        let  total_price = 0;
                        
                       for (let price of prices) {
                              
                        total_price+=price;
                        
                       }

                       return total_price;
            }


     console.log(getTotalPrice(2,3,4));




     /**
       Create a function buildSentence that accepts three arguments: subject, verb, and object. 
        If no object is passed, it should default to "something".
      */

    
        function buildSentence(subject,verb,object = "something") {
            
            console.log(` subject is ${subject} verb is ${verb} and object is ${object}`);

        }


       console.log(buildSentence("he","going","to jaipur"));


     /**
     Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.
      Create a function displayInfo that takes three arguments: name, age, and city. 
       If no city is provided, it should default to "Unknown"
      */

     function addNumbers(...numbers) {
         
         let sum = 0;

         for (let number of numbers) {
             sum+=number;
         }
        
     }


     function displayInfo(name , age , city = "Unknown") {
           
             console.log(`name is ${name} age is ${age} and city is ${city}`);

     }

     console.log(displayInfo("sunil",23,"mumbai"));


     /**
      Write a function orderPizza that takes two arguments: size and topping.
       If no topping is provided, it should default to "cheese".
      */

       function orderPizza(size,topping = "cheese") {
                     
                   console.log(`the size of pizza is ${size} and topping is ${topping}`);

       }

     console.log(orderPizza(32));


     /**
      Create a function makeCoffee that takes one required argument type and 
      an unknown number of optional ingredients using the rest operator
       
      */

      function makeCoffee(type,...ingredients) {
      
           console.log(`type of coffee is ${type} and ${ingredients[0]}`);
        
      }

  makeCoffee("hard" , "coffee" , "sugar","milk");


  /**
   * Write a function introducePerson that takes two positional arguments name 
   * and profession, with profession defaulting to "Student".
   */

  function introducePerson(name,profession = "Student") {
        console.log(`name is ${name} and profession is ${profession}`);
  }

  introducePerson("sunil","developer");

  /**
   Create a function findMax that accepts an unknown number of numbers using 
   the rest operator and returns the maximum value.
   */

   function findMax(...numbers) {
       let max_val = 0;
       for (const number of numbers) {
             max_val+=number; 
       }

       return max_val;
   }

   console.log(findMax(2,3,4));

   /**
    Write a function buildPerson that takes two arguments: firstName and lastName, 
    and returns an object representing the person.
    */

    function buildPerson(firstName,lastName) {
        
        let obj = {
            first: firstName,
            last :  lastName,
            fullname: function () {
                return ` full name is ${this.first} ${this.last}`
            }
        }

        return obj;

    }


  let obj = buildPerson("sunil","dhayal")

  console.log(obj.fullname());

  /**
   Create an object car with primitive properties: brand, model, and year
   */

   let car = {
         brand:"BMW",
         model:"top",
         year:"2024"
   }

   /**
    Create an object book with non-primitive properties: title, author, and 
      reviews (where reviews is an array of review objects).
    */

        let book = {
              title:"rich dad poor dad",
              author:"kapil",
              reviews:[ {reviewer:"amit",
                         rating:5,
                         comment:"nice book"
                         }, 
                         {
                           reviewer:"sumit",
                           rating:10,
                           comment:"nice lines in book"
                         }]
        }

/**
  Create an object laptop with both primitive (brand, price) and non-primitive (features - an array) properties.
 */

  let laptop ={
               
    brand:"hp",
     price:5600,
     feature:[{ram:
               "8gb",
               rom:
               "512gb ssd",
               processer: "i5"
     }]
  }

  console.log(laptop);

  /**
   Create an object person with a method greet that prints a greeting message using the name property.
   */

   let person = {
           name:"sunil",
           greet:function () {
                console.log(`hello namaste ${this.name}`);
           }
   }

   person.greet();

   /**
    Write a function buildTeam that takes an unknown number of team members using the rest operator 
     and returns an array of their names.
    */

     function buildTeam(...members) {
        
        

        return members;
     }

     console.log(buildTeam("sunil","amit","rahul","suman"));
