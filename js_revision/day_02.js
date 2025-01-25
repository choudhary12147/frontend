//  1. Axios -> library to make http requests

let btn = document.querySelector("button");

let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json ";

let img = document.querySelector("img");


btn.addEventListener("click", async ()=>{
     
   let link = await getImg();
   img.setAttribute("src",link);

})


async function getImg() {

      try {
          let res  = await axios.get(url);

            return res.data.product.image_front_small_url;        
      
          } catch (error) {

               return error; 
      
            }

}