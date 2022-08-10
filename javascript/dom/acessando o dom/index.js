//exemplo : sistemas de notas : 

let grade = 70

// selecionando o elemento e colocando dentro de uma variavel 
let tagSpan = document.querySelector("h2 span")

//mudando o valor da tag span pelo javascript de maneira dinamica. 
tagSpan.innerHTML = `${grade} %`

//fazendo a verificação da nota. 

if (grade >=70){
    tagSpan.className = 'approved'
}else{
    tagSpan.className = 'repproved'
}

//explicando : primeiro criamos uma variavel para receber a nota, que no caso é 70 . depois criamos uma outra variavel que recebe o valor que queremos manipular no dom, ou seja, recebe o span do h2 que existe no documento html. Assim sendo, essa variavel passa a ter esse valor. para mudar o valor dessa tag que esta no html podemos fazer isso via javascript de maneira dinamica acessando esse objeto por meio do metodo innerhtml onde esse objeto vai receber a nota que esta contida na variavel grade. depois disso fazemos uma verificação para ver se a variavel é maior ou menor ao valor que estamos definindo. se for maior ou igual no bloco de codigos vamos chamar mais um metodo do objeto tagspan que é para inserir uma classe que ja colocamos no arquivo css. se for menor ai vamos chamar outro metodo que vai inserir outra classe. fazendo tudo isso de maneira dinamica. 









// comentarios da aula 



//document object model 

//no html temos uma variavel que é global, que tem todas as informações de nosso arquivo, do nosso ambiente tambem : variavel window

//console.log(document)// document é uma variavel que retorna a informação de todos os elementos que estao dentro daquele documento. 

//console.dir(document.body)//visualizamos como objetos e nao como tags. 

//primeiro metodo para localizar elementos dentro do html pelo javascript. 

//console.log(document.getElementById('caixa'))

// segundo metodo
//console.log(document.getElementsByTagName('div')[0]) // retorna um objeto html collection , ou seja, uma coleção de elementos. Pega todos os elementos. as duas div

//terceiro metodo
//console.log(document.getElementsByClassName('yellow'))// retorna o objeto html collection porque selecionamos por esse metodo baseado em classe. 

//quarto metodo - melhor metodo. 

//console.log(document.querySelector("#caixa"))// utiliza os seletores do css3. retornando pelo id 

//console.log(document.querySelector(".yellow"))//retornando pela classe. o query selector so vai retornar a primeira ocorrencia do que procuramos. 

//retornar mais de um resultado : 

//console.log(document.querySelectorAll("div")) // retorna um objeto nodelist com dois elementos array

// apresentando o que tem dentro da variavel
//console.log(tagSpan)

//mudando a classe do elemento via javascript.
//tagSpan.className = 'repproved'

//console.log(tagSpan)
