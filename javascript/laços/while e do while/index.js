/*let count = 10 



while (count <=10 && count >= 1) {
    console.log(count)
    count--
}//usaremos o while quando nao sabemos necessariamente quantas vezes queremos repetir o codigo, mas sabemos que queremos repetir enquanto uma condicao for verdadeira

*/

/*

while (new Date().getSeconds() > 30) {
    console.log(new Date().getSeconds())
}

console.log('Fim' , new Date().getSeconds()) 

//precisamos tomar cuidado com o while, pois ele pode ser um loop infinito, e isso pode travar o navegador, ou o computador, e ate mesmo o servidor, por isso, devemos tomar cuidado com o while, e sempre ter uma condicao de parada, ou seja, uma condicao que quando for falsa, o while pare de rodar

*/

//do while

do {
    console.log(new Date().getSeconds())
} while (new Date().getSeconds() > 29) //ele garante que vai ser executado pelo menos uma vez, e depois ele verifica a condicao, se for verdadeira, ele executa novamente, se for falsa, ele para de executar



