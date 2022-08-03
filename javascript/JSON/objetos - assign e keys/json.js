//assign

let user = {
    name : 'samuel',
    email : 'samueld2014@gmail.com',
    password : '123456',

}

let user2 = {
    name : 'Daniel',
    age : 39,
}

//unir os dois objetos, mesclar 

let union = Object.assign(user, user2, {
    name : 'chanti',
})

//console.log(union) // ele sempre vai dar prioridade ao atributo que esta por ultimo em caso de conflito de atributos

console.log(Object.keys(union))// retorna um array com chaves. 

Object.keys(union).forEach(function(value){
    console.log(union[value])
})// for each explicado : quero percorrer os valores dos atributos que estao dentro de um objeto que foi chamado de union . Union tem name, email, password e age. Essas sao definidas como chaves no metodo object do javascript. Para percorrer esse objeto precisamos percorrer cada chave com forEach. Para cada chave do objeto uniao uma funcao vai ser chamada. Essa funcao recebe um parametro que é o valor do atributo que existe em union. cada vez que o laco passar ele vai colocar a informação que esta naquele indice especifico ate o indice 3 e retorno os valores para nos. 

for(let value in union){
    console.log(union[value])
}// metodo mais antigo.


