/**
 * string methods
 */

// method ->actions that can be performed on objects.

// format  -> stringname.method()

// method 1 -> trim

let string = "          sunil dhayal  ";


console.log(string.trim());

// methiod 2 ->  indexof(arg)
// method 3 -> Touppercase()
//method 4 -> Tolowercase()


//method 5 -> method chaining

//example


let nstring = "    sunil       ";


let now = nstring.trim().toUpperCase();


console.log(nstring);   /// not print  the upercase and trim result because  string are immuteable only change in the new not in old

console.log(now);

// method 6 -> slice method using starting row name to end row name like .slice(st,end);


//method 7 -> replace method    str.slice("sunil","sumit");  here find the sunil in the string and replce it with sumit

console.log(typeof(nstring));


//array


let num = [2,3,4,5];

console.log(typeof(num));   // array is javascript is of object type


// multiple type value in a single array

let info = ["sunil" , 23 , 40];

console.log(info[0][0]);  // print 's' on consol


console.log(info[0].length);  //print the sunil length


// string are immutable but array are mutable

let array = ["sunil" , "sumit ", "amit"];

array[1] = "rahul";


console.log(array);   // rahul is change in original array that's its mutable


// array methods

let array1 = ["sunil" ];

array1.push("anil");
array1.push("rahul");

console.log(`array after push \n ${array1}`)

array1.pop();

console.log(`array after pop \n${array1}`)


array1.unshift("amit");

console.log(`array after add at start\n ${array1}`)

array1.shift();

console.log(`array after remove from start \n ${array1}`);



// array method includes and  indexOf

console.log(array1.indexOf("sunil"));  // 0

console.log(array1.includes("sunil"));  // true




// array concatenation and reverse


let primary = ["sunil", "anil" , "rahul" ,"amit"];

let secondary = ["sumit" , "sunita" , "anita"];

let concat = primary.concat(secondary);

console.log(concat);

console.log(primary.reverse());


// slice are immutable and splice mutable

primary.slice(2);

console.log(primary);  // immutable that's why reverse primary is print

primary.splice(2);

console.log(primary);  // mutable that's why reverse array element after 2 index is print


// sort method


let unsort = ["sanday","manday","wednesday" , "thursday" , "saturday","friday"];

console.log(unsort.sort());  // sort according to the aplhabet


//practices


let start = ["january" ,"july ", "march","august"];

console.log(start.splice(0,2,"july","june"));

console.log(start);


// array reference



let arr1 = [1,2,3];

let arr2 =   arr1;

console.log(arr1 == arr2);  // true 

