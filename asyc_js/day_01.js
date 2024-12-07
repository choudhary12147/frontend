// call back hell

function savetoDB(data, success, failure) {
         
    let internetSpeed = Math.floor(Math.random()*10);

    if (internetSpeed > 4) {
           success();
    }else{
          failure();
    }

}
 

savetoDB("sunil dhayal",()=>{
    console.log("your data is saved");  
      
    savetoDB("is a", ()=>{
          console.log("data 2 is saved");

              savetoDB("good man ",()=>{
                  console.log("data3 is saved");
              },()=>{
                console.log("data 3 is not saved");
              })

    },()=>{
          console.log("data2 is not saved");
    })
    

} , ()=>{
    console.log("data is not saved");
});