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
    document.querySelector('.black').disabled = false;
    document.querySelector('.red').disabled = false;
    document.querySelector('.skyBlue').disabled = false;
});

document.querySelector('.black').addEventListener('click', () => {
    document.querySelector('#product-image').style = 'fill: black';
    document.querySelector('.black').disabled = true;
    document.querySelector('.white').disabled = false;
    document.querySelector('.red').disabled = false;
    document.querySelector('.skyBlue').disabled = false;
});

document.querySelector('.red').addEventListener('click', () => {
    document.querySelector('#product-image').style = 'fill: red';
    document.querySelector('.red').disabled = true;
    document.querySelector('.black').disabled = false;
    document.querySelector('.white').disabled = false;
    document.querySelector('.skyBlue').disabled = false;
});

document.querySelector('.skyBlue').addEventListener('click', () => {
    document.querySelector('#product-image').style = 'fill: skyBlue';
    document.querySelector('.skyBlue').disabled = true;
    document.querySelector('.red').disabled = false;
    document.querySelector('.black').disabled = false;
    document.querySelector('.white').disabled = false;
});
