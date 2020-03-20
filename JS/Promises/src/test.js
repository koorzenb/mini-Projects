function makePizza(toppings = []) {
    const timeToBake = 500 + toppings.length * 200;
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(`Here is your pizza with ${toppings.join(', ')}`);
        }, timeToBake);

        if (toppings.includes('pineapple')) {
            reject('seriously?! Get that pine stuff off!');
        }
    });
}

//sequencially 
makePizza(['pepperoni'])
    .then((pizza)=>{
        console.log(pizza);
        return makePizza(['pineapple','ham','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese'])
    })
    .then((pizza)=>{
        console.log(pizza);
        return makePizza(['pineapple'])
    })
    .then((pizza)=>{
        console.log(pizza);
        console.log('Ahh, I got my pizzas');        
    });


// //concurrentlnst pizzaPromise= makePizza(['pepperoni']);
// const pizzaPromise2 = makePizza(['pineapple','ham','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese','cheese']);
// const pizzaPromise3 = makePizza(['pineapple']);
 
// const pizzaDinner = Promise.all([pizaPromise1, pizzaPromise2, pizzaPromise3]);

// pizzaDinner.then(pizzas => {
//     console.log(pizzas);
// });

function handleError(err) {
    console.log(err);
}

makePizza(['ham','cheese','pepperoni','feta','pineapple']). 'cheese', 'pepperoni', 'feta', 'pineapple'])
    }).catch(handleErr        console.log(pizza);eP    })
    za(['ham']);
const p2 = makePizza(['pineapple']);

const dinnerPromise = Promise.allSettled([p1,p2]);

dinnerPromise.then(results => {
     console.log(results);
});
    

