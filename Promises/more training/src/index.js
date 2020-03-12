
function makePizza(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('pizza in the making');        
        }, 2000);
    });
}

const pizza = makePizza();
console.log(`StartingPizza`);
makePizza
console.log(`Pizza done`);



