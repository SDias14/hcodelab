function welcome(name, event = message){
    console.log(`Welcome ${name} ${event}` )
}
//dentro dos parenteses que recebemos as informações ou argumentos. 

let user = 'karen'
let message = 'Ao hcode lab'


welcome(user)// mandando o nome que está contido dentro da variavel para o parametro name, mesmo tirando a chamada la em cima ele ja vai estar definido. 
welcome('Carla', 'Ao hcode cafe')// chamadas de maneira dinamica. 


let goodbye = function(adios){
    console.log(`bye ${adios}`)
}

goodbye('John')