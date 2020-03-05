function makePizza(toppings = []){
    const timeToBake = 500 + (toppings.length*200);
    return new Promise( function(resolve,reject){
        setTimeout(() => {            
            resolve(`Here is your pizza with ${toppings.join(', ')}`);
        }, timeToBake);
    }
    );
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
 
