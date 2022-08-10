/*window.addEventListener('load', function() {

alert('Load ok ') // load : é um evento que ocorre quando a página é carregada


})

*/

window.addEventListener('resize', function() {

console.log(window.innerWidth) // resize : é um evento que ocorre quando a página é redimensionada

document.querySelector('h2').innerHTML = window.innerWidth

})

window.addEventListener('focus', function() {

console.log('focus') // focus : é um evento que ocorre quando a página ganha foco


})

window.addEventListener('blur', function() {

    console.log('no focus') // focus : é um evento que ocorre quando a página ganha foco
    
    
    })



const botoes = document.querySelectorAll('button');

[...botoes].forEach(botao => {
botao.addEventListener('click', (event) => {

console.log(event.target.id)

switch (event.target.id) {
case 'pode':
console.log('Pode entrar')
break;

default:
console.log('Não pode entrar')

}



alert('Agendamento Salvo!');
console.log(event);
});

})// dois argumentos : uma string e uma função