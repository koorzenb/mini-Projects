const button = document.querySelector('button');

function wait(ms = 0){
    return new Promise(function (resolve) {
        setTimeout(() => resolve('Done!'), ms);
    });
}

function animate() {
    wait(1000).then(()=>{
        button.innerText = 'Go!';
        return wait(500);
    }).then(()=> {
        button.classList.add('round');
        return wait(1000);
    }). then (() => {
        button.classList.add('green');
    }). then(()=>{
        console.log('Done animating');        
    });
}

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

button.addEventListener('click', animate);
