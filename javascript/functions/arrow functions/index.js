let exibition = nome => console.log(nome)//famosas arrow functions, que nao precisa do nome function, passamos o parametro e a seta. Quando a funcao tem um parametro nao precisamos colocar os parenteses. alem disso quando a funcao so tem uma linha de comando nao vamos precisar das chaves. 


let lastName =  last => console.log(last)


//exibition('Elias')
//lastName('Dias')


let invName = ['geisa', 'joao', 'sarah'].map((value) => value.split('').reverse().join(''))

console.log(invName)