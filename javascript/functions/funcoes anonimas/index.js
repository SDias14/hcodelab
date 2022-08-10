let calcAge = function(bornYear, callback){

    setTimeout(callback, 3000)


    return new Date().getFullYear() - bornYear
    }

console.log(calcAge(1996, function(){
    console.log('Voce é velho')
})) // o segundo parametro que é uma funcao vai ser o parametro da primeira funcao , vai ser um callback que vai retornar uma mensagem depois de 3 segundos. 



//let a = function () {
 //   console.log('welcome hcode')
//}

//a()
/*
(function () {
    console.log('hello hcode')
})();

*/


//iief = imediately invoked function . É uma funcao que é chamada imediatamente ao rodar nosso codigo, no inicio dele e roda uma vez. 

