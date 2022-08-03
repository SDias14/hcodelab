let text = '{"firstName":"Samuel","lastName":"Dias","favoriteLanguages":["php","javascript","java"]}'

let obj = (JSON.parse(text)) // passou para um json 

let firstName = (obj.firstName) //pegando o nome do objeto e colocando na variavel

let sName = (JSON.stringify(firstName))// transformando o atributo do objeto em string

console.log(typeof sName) // retornando string



