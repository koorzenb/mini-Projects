/**
 * or alternatively:
const buybutts = document.querySelectorAll('button.buy');
const handle = () => console.log('clicked here');

// comment: e ="event" = parameter = placeholder = can be any name
buybutts.forEach(function(e) {
        e.addEventListener('click', handle);
});

 */

const buybutts = document.querySelectorAll('button.buy');
const handle = () => console.log('clicked here');
const attachListener = function(e) {
        e.addEventListener('click', handle);
};

buybutts.forEach(attachListener);

