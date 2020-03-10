function makePizza(toppings = []){
    const timeToBake = 500 + (toppings.length*200);
    return new Promise( function(resolve,reject){
        setTimeout(() => {            
            resolve(`Here is your pizza with ${toppings.join(', ')}`);
        }, timeToBake);

        if (toppings.includes('pineapple')){
            reject('seriously?! Get that pine stuff off!')
        }
    }
    );
} 

// //sequencially 
// makePizza(['pepperoni'])
//     .then((pizza)=>{
//         console.log(pizza);
//         return makePizza(['pineapple','ham','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese'])
//     })
//     .then((pizza)=>{
//         console.log(pizza);
//         return makePizza(['pineapple'])
//     })
//     .then((pizza)=>{
//         console.log(pizza);
//         console.log('Ahh, I got my pizzas');        
//     });


// //concurrently
// const pizzaPromise1 = makePizza(['pepperoni']);
// const pizzaPromise2 = makePizza(['pineapple','ham','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese']);
// const pizzaPromise3 = makePizza(['pineapple']);
 
// const pizzaDinner = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// pizzaDinner.then(pizzas => {
//     console.log(pizzas);
// });

// // error handling
// function handleError(err) {
//     console.log(err);
// }

// makePizza(['ham','cheese','pepperoni','feta','pineapple']).then(pizza => {
//     console.log(pizza)
// }).catch(handleError);

// const p1 = makePizza(['ham']);
// const p2 = makePizza(['pineapple']);

// const dinnerPromise = Promise.allSettled([p1,p2]);

// dinnerPromise.then(results => {
//     console.log(results);
// });

// async
async function makeDinner() {
    console.log('starting');    
    const pizza1 = makePizza(['pepperoni']);
    const pizza2 = makePizza(['ham','cheese'])

    const dinner = await Promise.all([pizza1, pizza2]);
    console.log(dinner);
    
}

makeDinner();
    

