// funções : funções são blocos de código que executam algo especifico. Pode ser usado varias vezes.

/*

function soma(a, b) {
    return a + b;
}

let soma1 = soma(1, 2);
let soma2 = soma(3, 4);

let resultado = soma(soma1, soma2);

console.log(resultado);

//pode-se criar um array desses numeros 

*/

function soma(a, b) {
  return a + b;
}

//criando um array para chamar a funcao 

let resultado = [soma(1, 2), soma(3, 4)];


console.log(resultado);




