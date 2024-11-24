
// Q.1

/**A couple is deciding on the perfect restaurant for their date night. You have an array of restaurant objects, where each object contains `name`, `distance` (in km), and `rating` (out of 5).  

Task:  
1. Use `filter` to find all restaurants within 5 km and with a rating of 4 or higher.  
2. Use `map` to create an array of the names of these restaurants.  
3. Use `find` to get the first restaurant that meets the criteria.  

Example Input:  

const restaurants = [
  { name: "Romantic Rooftop", distance: 3, rating: 4.5 },
  { name: "Cozy Corner", distance: 6, rating: 4.2 },
  { name: "Candlelight Cafe", distance: 2, rating: 3.9 },
  { name: "Starry Sky Diner", distance: 4, rating: 4.8 },
];
  
Expected Output:  
 Filtered restaurants: `[ { name: "Romantic Rooftop", ... }, { name: "Starry Sky Diner", ... } ]`  
 Names: `["Romantic Rooftop", "Starry Sky Diner"]`  
 First option: `{ name: "Romantic Rooftop", distance: 3, rating: 4.5 }`  */


 const restaurants = [
    { name: "Romantic Rooftop", distance: 3, rating: 4.5 },
    { name: "Cozy Corner", distance: 6, rating: 4.2 },
    { name: "Candlelight Cafe", distance: 2, rating: 3.9 },
    { name: "Starry Sky Diner", distance: 4, rating: 4.8 },
  ];


  let  filterrestro =  restaurants.filter((el)=>{
               
      if (el.distance<=5 && el.rating >= 4) {
         return el;
      }

  });


  let restromap =  filterrestro.map(el => el.name);

  // console.log(restromap);

 
  let findrestro =  restaurants.find((restro) => (restro.distance<=5&&restro.rating>=4));

  console.log(findrestro);



  /** 
   * Q.2
   * 
   * 
 A person is writing love letters to their crush and keeps track of words used in each letter in an array.  

Task:  
1. Use `reduce` to count the total number of words across all letters.  
2. Use `some` to check if any letter contains the word `"forever"`.  
3. Use `every` to verify that all letters contain the word `"love"`.  

Example Input:  

const letters = [
  ["I", "will", "love", "you", "forever"],
  ["You", "are", "the", "love", "of", "my", "life"],
  ["Love", "is", "what", "binds", "us"],
];
  
Expected Output:  
 Total word count: `19`  
 Contains "forever": `true`  
 All letters contain "love": `true`  

   * 
   */


 const letters = [
  ["I", "will", "love", "you", "forever"],
  ["You", "are", "the", "love", "of", "my", "life"],
  ["Love", "is", "what", "binds", "us"],
];




// total number of word count

let wordcount =  letters.reduce((acc,el)=>(acc+ el.length),0);

console.log(wordcount);


const containsforever = letters.some( el => el.includes("forever"));

console.log(containsforever);

const allcontainlove = letters.every((el)=> el.some(e => e.toLowerCase() === "love"));

console.log(allcontainlove);



/*

Q.3

A couple is picking movies for a marathon. Each movie object contains `title`, `genre`, and `duration` (in minutes).  

Task:  
1. Use `filter` to get all movies of the genre `"romance"`.  
2. Use `reduce` to calculate the total duration of all selected movies.  
3. Use `map` to create a list of their titles.  

Example Input:  

const movies = [
  { title: "Love Actually", genre: "romance", duration: 135 },
  { title: "Inception", genre: "scifi", duration: 148 },
  { title: "The Notebook", genre: "romance", duration: 123 },
  { title: "Titanic", genre: "romance", duration: 195 },
];
  
Expected Output:  
 Filtered movies: `[ { title: "Love Actually", ... }, { title: "The Notebook", ... }, { title: "Titanic", ... } ]`  
 Total duration: `453` minutes  
 Titles: `["Love Actually", "The Notebook", "Titanic"]` 

 */

 const movies = [
  { title: "Love Actually", genre: "romance", duration: 135 },
  { title: "Inception", genre: "scifi", duration: 148 },
  { title: "The Notebook", genre: "romance", duration: 123 },
  { title: "Titanic", genre: "romance", duration: 195 },
];


const filtermovie = movies.filter(el=>el.genre === "romance");

console.log(filtermovie);




const acctoduration =  filtermovie.reduce((acc,el)=> (acc+el.duration),0);

console.log(acctoduration);


const mtitle = movies.map(el=> el.title);

console.log(mtitle);


/*

Q.4

A person is searching for the perfect gift for their partner from an array of gift options, where each gift has `name`, `price`, and `popularity` (out of 5).  

Task:  
1. Use `filter` to find gifts under ₹1000 and with a popularity of 4 or higher.  
2. Use `find` to get the first gift that meets these criteria.  
3. Use `every` to check if all the gifts are below ₹5000.  

Example Input:  

const gifts = [
  { name: "Teddy Bear", price: 800, popularity: 4.5 },
  { name: "Perfume", price: 1500, popularity: 4.7 },
  { name: "Photo Frame", price: 500, popularity: 3.8 },
  { name: "Necklace", price: 4500, popularity: 4.9 },
];
  
Expected Output:  
 Filtered gifts: `[ { name: "Teddy Bear", ... } ]`  
 First gift: `{ name: "Teddy Bear", price: 800, popularity: 4.5 }`  
 All gifts below ₹5000: `true`  

 */


 const gifts = [
  { name: "Teddy Bear", price: 800, popularity: 4.5 },
  { name: "Perfume", price: 1500, popularity: 4.7 },
  { name: "Photo Frame", price: 500, popularity: 3.8 },
  { name: "Necklace", price: 4500, popularity: 4.9 },
];

const filtergift  = gifts.filter((el)=>(el.price <= 1000 && el.popularity >= 4));

console.log(filtergift);


const firstgift =  gifts.find(el => el.price <= 100 && el.popularity >= 4);

console.log(filtergift);

const isallless500 = gifts.every(el => el.price < 500);

console.log(isallless500);


/*

Q.5

You have an array of song objects, each containing `title`, `artist`, and `duration` (in seconds).  

Task:  
1. Use `map` to convert the duration of each song into minutes and seconds.  
2. Use `reduce` to calculate the total playlist duration in minutes.  
3. Use `some` to check if any song exceeds 5 minutes.  

Example Input:  

const songs = [
  { title: "Perfect", artist: "Ed Sheeran", duration: 263 },
  { title: "All of Me", artist: "John Legend", duration: 269 },
  { title: "A Thousand Years", artist: "Christina Perri", duration: 295 },
];
  
Expected Output:  
 Converted durations: `[ "4:23", "4:29", "4:55" ]`  
 Total duration: `13:47`  
 Any song exceeds 5 minutes: `false` 
*/

const songs = [
  { title: "Perfect", artist: "Ed Sheeran", duration: 263 },
  { title: "All of Me", artist: "John Legend", duration: 269 },
  { title: "A Thousand Years", artist: "Christina Perri", duration: 295 },
];

const convertdurr = songs.map(el => {
     const minute =   Math.floor(el.duration/60);
     const sec = (el.duration %60);

     return `minutes ${minute} and second ${sec}`;
});

console.log(convertdurr);

const playlistdur = songs.reduce((total,el)=>(total+el.duration),0);



const minuteofplaylist =  Math.floor(playlistdur/60);

const secofplaylist = playlistdur%60;

console.log(`duration of playlist ${minuteofplaylist} minutes ${secofplaylist}second`);

const durationmorethan5 = songs.some( el => el.duration > 300);

console.log(durationmorethan5);

