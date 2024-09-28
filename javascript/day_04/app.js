/**
 *   loop 
 *  1.for loop
 */

let n = 15;

  for (let index = 0; index <= n; index++) {
      
      if(index%2 != 0 ){
          console.log(`num is old ${index}`);
      }
    
   
  }


  /**
   * Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
              Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
              Result should be arr = [1, 3, 4, 5, 6, 3]
   */

              let arr = [1,2,3,4,5,6,2,3];

              console.log(arr);

              let num = 2;

            for (let i = 0; i < arr.length; i++) {
            
                if (arr[i] == num) {
                      
                    arr.splice(i,1);

                }
                
            }

            console.log(arr);


            /**
             *    Qs2. Write a JS program to find the no of digits in a number.
                       Example : if number = 287152, count = 6
             */


                      



                       /**
                        * Qs3. Write a JS program to find the sum of digits in a number.
                               Example : if number = 287152, sum = 25
                        */

                               let num2 = 287152;
                                
                               let sum = 0;

                               while (num2 >= 0) {
                                
                                       
                                     sum +=  (num2%10)
                                   
                                     num2 /= 10;

                               }

                               console.log(sum);


                               /***
                                * 
                                * Qs4. Print the factorial of a number n
                                */

                               let n1 = 8;
                           
                               let fact = 1;

                               for (let i = 0; i < n1; i++) {
                                
                                       fact *= (n1-i);
                                
                               }


                               /**
                                * Qs5. Find the largest number in an array with only positive numbers
                                */

                               let arr1 = [1,3,4,2,6];
                          
                             let largest = 0;

                               for (let i = 0; i < arr1.length; i++) {
                                       
                                   if(arr1[i] > largest){
                                       
                                    largest = arr1[i];
                                   }
                                
                               }

                               console.log(largest);