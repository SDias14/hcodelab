let counter = 0

const idInterval = setInterval (() => {

 counter ++

document.querySelector('#seconds').innerHTML = counter

}, 1000) // pode ser manipulado uma tag html


document.querySelector('#b').addEventListener('click', () => {
    clearTimeout(idInterval);
    console.log('desligou');
})





const idTimeout = setTimeout(() => {
    
    document.querySelector('#seconds').style.color = 'blue';

    console.log('Hello World');
    clearTimeout(idInterval)

    
}, 10000) // pode ser manipulado uma tag html 

document.querySelector('#a').addEventListener('click', () => {
    clearTimeout(idTimeout);
    console.log('desligou');
})
    


// limpa o timeout








