// criando função , declaração de funcao. Com a funcao da pra fazer hoisting 

function welcome(){
    console.log('Welcome User')

}

welcome() //inicialização da funcao, ou seja, estamos chamando a funcao. 

// criando funcao dentro de variaveal, pode ser chamada de expressao de funcao. Essa maneira nao consegue fazer hoisting. 

let goodBye = function(){
    console.log('bye...')
}

goodBye()