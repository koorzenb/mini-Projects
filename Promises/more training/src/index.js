
async function makePizza(){
    setTimeout((resolve) => {
        resolve('pizza in the making');        
    }, 2000);
}

console.log(`StartingPizza`);
await console.log(makePizza());
console.log(`Pizza done`);


