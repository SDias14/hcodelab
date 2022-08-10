

class Person {
    constructor(personName, personAge) {
        this.name = personName
        this.age = personAge
    }
    get age(){
        return ' A idade da pessoa é ' + this.ageValue
    }
    set age(value){
        this.ageValue = Number(value)
        console.log(this.ageValue)
    }// o objeto criado fora da classe passa os parametros, e esses parametros sao enviados para dentro da classe, onde ele vai ser construido. Dentro da classe recebe um tratamento, onde o metodo set pega o valor da idade como parametro e joga dentro de uma nova variavel. essa nova variavel é pega pelo get onde retorna um valor para fora da classe com mensagens. 
}


let person1 = new Person('Joao', 25)



console.log(person1.name, person1.age)




// json 


let person3 = {
    nome : 'Antony',
    idade : 37,
}

console.log(person3.nome, person3.idade)

console.log(person1) // referenciando uma classe. 
console.log(person3) // notação em json, nao vem de uma classe