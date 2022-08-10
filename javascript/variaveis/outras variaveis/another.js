
let product = 'ps5'
var anotherProduct = 'ps4'


//console.log(product)
//console.log(anotherProduct)



/*

// diferenças entre var e let = escopo


//quando declaramos uma variavel no inicio do código, ela é global, onde todo mundo consegue ver. 

//diferença 2 entre var e let = escopo

let number = 25
let number2 = 20

if (number > number2) {
  // let message = 'number is bigger' 
 // console.log(message) // so consegue ver a variavel message dentro do bloco if

  var message = 'number is bigger' // variavel global
}

console.log(message) // consegue ver a variavel message fora do bloco if



//conseguimos acessar a variavel message por conta do hoisting, fazendo com que a variavel seja declarada antes do if, e depois ela é acessada. ja com o let, não é possível acessar a variavel antes de ser declarada, nao sendo efetuada o hoisting.


*/

const number = 25
let number2 = 20



number2 += 5


// desse jeito vai dar erro pois uma variavel const não pode ser alterada


// criando um array car 

const car = ['BMW', 'Audi', 'Fusca']





car.push('Ferrari')// adicionando um novo elemento no array

console.log(car)

car.pop () // remove o ultimo elemento do array

console.log(car)

//boas praticas com relação a criação de variaveis : sempre que uma variavel for constante, declarar com const.






