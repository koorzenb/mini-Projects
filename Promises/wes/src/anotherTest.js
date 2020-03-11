const button = document.querySelector('button');

function wait(ms = 0){
    return new Promise(function (resolve) {
        setTimeout(() => resolve('Done!'), ms);
    });
}

// // callback Hell
// function clickHandler(){
//     setTimeout(() => {
        // button.innerText = 'Go!';
//         setTimeout(() => {
            // button.classList.add('round');
//             setTimeout(() => {
                // button.classList.add('green');
//             }, 1000);
//         }, 500);
//     }, 1000);
// }

// // async1
// function animate() {
//     wait(1000).then(()=>{
//         button.innerText = 'Go!';
//         return wait(500);
//     }).then(()=> {
//         button.classList.add('round');
//         return wait(1000);
//     }). then (() => {
//         button.classList.add('green');
//     }). then(()=>{
//         console.log('Done animating');        
//     });
// }

async function animate2() {
    await wait(1000)
        button.innerText = 'Go!';
    await wait(500);
        button.classList.add('round');
    await wait(1000);
        button.classList.add('green');
        console.log('Done animating');        
};


button.addEventListener('click', animate2);
