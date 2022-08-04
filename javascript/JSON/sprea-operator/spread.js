let person = {
    name : "john",
    age : 30,

}// primeiro objeto que foi feito com json. tem os atributos nome e idade 

let user = {
    email: 'samueld2014@gmail.com',
    password: 123456,
}// segundo objeto que foi feito tambem com json. tem os atributos email e senha.

console.log({...person, ...user})// se usa a notação de objeto com as duas chaves dentro dos parenteses do console, indicando com tres pontos , fazendo com que a informaçãos seja espalhada. 