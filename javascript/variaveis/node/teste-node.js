document.
querySelector('#changeColor'). // trazendo o primeiro elemento com o id changeColor
      addEventListener('click', () => {
           document.querySelector('h2').style.color = 'yellow'; //adicionando um evento ao elemento h2 e alterando o seu estilo
});







//comentarios


//console.log(getComputedStyle(tagH2, null).getPropertyValue('color')); //vai trazer a cor do h2

//getcomputedstyle é um metodo que vai trazer as propriedades do elemento

//getpropertyvalue é um metodo que vai trazer o valor da propriedade

//podemos definir uma cor via javascript

//tagH2.style.color = 'yellow';

//quando estamos trabalhando do lado do servidor podemos manipular o DOM

//quando nos referimos ao document, estamos referenciando o documento que estamos visualizando

//console.log(getComputedStyle(tagH2, null).getPropertyValue('color'));

//manipulação de elementos

// console.log('Iniciando...');


//let tagH2 = document.querySelector('h2') //vai trazer somente o primeiro h2

//let btn = document.querySelector('#changeColor');

//criando um evento para mudar a cor do botao





