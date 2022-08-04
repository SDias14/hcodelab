//escopo de funcao 
let age// para acessarmos a variavel dentro da funcao temos que declarar ela de forma global. Dentro da funcao nao vamos precisar declarar o let de novo e na saida vai retornar o valor para nos. 

let calcAge = function(bornYear){
    global.fullYear = new Date().getFullYear() - bornYear
    age  = fullYear - bornYear
    return age
    }

console.log(calcAge(1996))// retornou a idade para fora do codigo 
//console.log(bornYear) // chamando o parametro bornyear, mas nao conseguimos porque chamamos o escopo local que existe somente dentro da funcao. 
console.log(age)// nao vamos conseguir chamar porque so existe dentro da funcao
console.log(fullYear)

