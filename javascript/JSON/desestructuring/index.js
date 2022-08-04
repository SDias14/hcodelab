let person = {
    name :'john',
    age : 30,
    email : 'John.22@gmail.com',
    password : 123456,
}

let { name } = person // por a notação de json no nome da variavel para que ela possa acessar o atributo name dentro do objeto pessoa. 
let { age } = person 

let { password } = person

console.log(name, age, password)