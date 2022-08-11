/*window.addEventListener('load', function() {

alert('Load ok ') // load : é um evento que ocorre quando a página é carregada


})

*/
// eventos de janela (window)
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


// eventos de mouse






const botoes = document.querySelectorAll('button');

[...botoes].forEach(botao => {

botao.addEventListener ('mouseenter', function(event) {
      console.log(event.type)

}, false)

botao.addEventListener ('mouseleave', function(event) {
    console.log(event.type)

}, false)

botao.addEventListener ('mousemove', function(event) {
    console.log(event.type)

}, false)

botao.addEventListener ('mousedown', function(event) {
    console.log(event.type)

}, false)

botao.addEventListener ('mouseup', function(event) {
    console.log(event.type)

}, false)



botao.addEventListener('contextmenu', (event) => {

console.log(event.target.id)

switch (event.target.id) {
case 'pode':
console.log('Pode entrar')
break;

default:
console.log('Não pode entrar')

}



console.log('Agendamento Salvo!');
console.log(event);
});

})// dois argumentos : uma string e uma função




// eventos teclado

document.querySelector('input').addEventListener('mouseenter', function(event) {

    event.target.focus()

}) // focus : é um evento que ocorre quando o elemento ganha foco

document.querySelector('input').addEventListener('keypress', function(event) {

    if ( event.shiftKey) console.log(event.type)

    

})//deprecated


document.querySelector('input').addEventListener('keydown', function(event) {

    if ( event.ctrlKey) console.log(event.type)

    

})//quando a tecla é pressionada para baixo



document.querySelector('input').addEventListener('keyup', function(event) {

    console.log(event.type)

    

})// quando solta a tecla