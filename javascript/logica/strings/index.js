// strings 

//const company = 'google' // aspas definem como strings 

//console.log(company)

const webSite = 'www.jw.org'

//console.log(webSite.length) // acessando o numero de caracteres da string

//console.log(webSite.substring(4,webSite.length)) // ele mostra a string de uma posição inicial ate a final que a gente declara.

//console.log(webSite.charAt(4)) // mostra que caractere esta na posicao escolhida 

//console.log(webSite[4]) // podemos tambem ver quem esta na posição por meio dos colchetes. 

// console.log(webSite.substring(-5,  ))

console.log(webSite.toLowerCase()) // transforma tudo para letra minuscula 

console.log(webSite.toUpperCase()) // transforma tudo em maiuscula.

console.log(webSite.replace('www', 'bbb'))

console.log(webSite.includes('org')) // retorna um valor booleano de acordo com a string pesquisada

console.log(webSite.indexOf('jw'))

const welcome = 'welcome home earth'

console.log(welcome.split(' '))

const email = 'samueld2014@gmail.com'

const userName = email.substring(0, 11)
const domain = email.substring(12, email.length)

console.log(userName)
console.log(domain)

const web = 'sss@com.br'

const webSplit = web.split('@')

console.log(webSplit)

const name = webSplit[0]
const site = webSplit [1]

console.log(name , site)






