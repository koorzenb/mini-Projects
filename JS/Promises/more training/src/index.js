function wait(ms, msg){
    return new Promise((resolve) =>{
        setTimeout(resolve, ms, msg)
    });
}


Promise.race([wait(200, "one"), wait(300,"two")]).then((value) => console.log(value));



/**
 * same as:
 function testing(){
     wait(1000)
     .then(() => {
         cl
         return wait(2000)
     })
     .then(() => {
         cl
     })
 }
 */

// testing();