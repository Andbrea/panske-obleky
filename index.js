'use strict';

console.log('funguju');

// style="fill: #a6a6a6"
/* const changeColor = (event) => {

  const tshirtElm = document.querySelector('#product-image');

  tshirtElm.style = `fill: ${}`

}

document.querySelectorAll('button').addEventListener('click', changeColor) */

document.querySelector('.white').addEventListener('click', () => {
    document.querySelector('#product-image').style = 'fill: white';
    document.querySelector('.white').disabled = true;
});

document.querySelector('.black').addEventListener('click', () => {
    document.querySelector('#product-image').style = 'fill: black';
    document.querySelector('.black').disabled = true;
});
