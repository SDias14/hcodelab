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