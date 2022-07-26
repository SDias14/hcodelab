//orientação a objetos - paradigma de programação

/*
é um modo de escrevermos nossos programas com base em 'objetos' que podem conter variaveis, funções, etc, os quais passam a ser chamados de atributos e métodos

objeto : alguma cois que tem atributos (qualidades, propriedades) e métodos (funções que podem ser executadas)

por exemplo , em um carro temos os atributos : 

cor : amarelo
preço : R$ 10.000
fabricante : Fiat
modelo : Palio
potencia : 1.0

e os metodos ou funcoes que executam : 

acelerar : quanto devo acelerar ?
frear : quanto devo frear ?
virar : qunado devo virar ?
abrir : quando devo abrir ?
fechar :quando devo fechar ?

posso falar tambem que existem dois carros com os mesmos atributos e metodos, ou seja, carros são objetos


pode ser que eu queira fabricar varios carros com os mesmos atributos e metodos, assim esses carros vao ser objetos de uma classe, onde a classe agrupa todos os atribtuos e metodos que vao ser necessarios para criar um carro. Este tipo de classe é chamada de 'classe'

a classe vai ser como uma descrição do objeto. ou seja, criamos a classe para passarmos como o carro deve ser e no final instanciamos um novo carro com os atributos e metodos da classe. o objeto final vai ser como uma copia da classe, com os atributos e metodos que foram passados.


montando uma classe carro 



*/

/*



class car {
    constructor(cor, preco, fabricante, modelo, potencia,direcao) {
        this.cor = cor;
        this.preco = preco;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.potencia = potencia;
        this.direcao = direcao;
    }
    acelerar() {
        console.log('acelerando');
    }
    frear() {
        console.log('freando');
    }
    virar() {
        console.log('virando');
    }
    abrir() {
        console.log('abrindo');
    }
    fechar() {
        console.log('fechando');
    }
}






let carro = new car('amarelo', 10000, 'Fiat', 'Palio', 1.0, 'esquerda');


let carro2 = new car('azul', 10000, 'Fiat', 'Palio', 1.0);

let carro3 = new car('verde', 10000, 'Fiat', 'Palio', 1.0);

let carro4 = new car('vermelho', 10000, 'Fiat', 'Palio', 1.0);

console.log(carro);



//acelerar o carro em 45 km/s e frear em 10 km/s

carro.acelerar();
carro.frear();

*/



// resumindo : foi criada uma classe carro, que tem os atributos e metodos que serao usados para criar um carro. essa classe é como se fosse um esboço do carro, que sera usado para criar um carro. Quando formos criar um carro ele será um novo objeto, que tera os atributos e metodos da classe carro. Eu posso criar diferentes carros com os mesmos atributos e metodos, ou seja, os diferentes carros usarao a mesma classe carro. Porem eu posso mudar alguns atributos para criar carros diferentes. Posso manipular os atributos e metodos de cada carro, como acelerar, frear, virar, abrir, fechar.
/*

class car {

   cor = 'amarelo';
   preco = 10000;
   fabricante = 'Fiat';
   modelo = 'Palio';
   potencia = 1.0;
}


let carro = new car();

console.log(carro);

*/


// encapsulamento - ocultar as informacoes de um objeto. O encapsulamento define as permissoes de acesso de nossos atributos e metodos.Isso torna possivel ocultar e proteger alteracoes fora do objeto. 

//tipos de encapsulamento

// 1 - publico - todos podem acessar o atributo e metodo

// 2 - privado - somente o objeto pode acessar o atributo e metodo

// 3 - protegido - somente a classe pode acessar o atributo e metodo


/*
exemplo : banheiro publico

o banheiro publico pode ser acessado por todos. 
o banheiro privado é de alguem, por exemplo o meu banheiro. Eu preciso autorizar. 
O banheiro protegido é um banheiro que pode ser acessado somente por aqueles que ja estao dentro da minha casa.

No exemplo acima dos carros, eu consigo acessar todos os atributos e metodos fora da classe. Por que ? Porque quando nao declaro que tipo de encapsulamento quero usar, o js assume que e publico.
*/

// propriedades privadas, publicas e protegidas

/*

class car {
    cor = 'amarelo';
    preco = 100000;
    fabricante = 'Fiat';
    potencia = 1.0;
    modelo = 'Palio';
    _direcao = 0;

    acelerar() {
        console.log('acelerando');
    }
    frear() {
        console.log('freando');
    }
    virar(graus) {
        this.direcao = this.direcao + graus;
    }
    abrir() {
        console.log('abrindo');
    }
    fechar() {
        console.log('fechando');
    }
    
}







let carro = new car();

console.log(carro.virar(45));


*/

//montando uma classe com private

class car {
    constructor(cor, preco, fabricante, modelo, potencia, direcao) {
        this.cor = cor;
        this.preco = preco;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.potencia = potencia;
        //direção é um atributo privado 
        this._direcao = direcao;


       
    }
    acelerar() {
        accelerate = accelerate + 1;
    }
    frear() {
        console.log('freando');
    }
    virar(graus) {
        this.direcao = this.direcao + graus;

      
       
        
        return this.direcao;
    }
   
    abrir() {
        console.log('abrindo');
    }
    fechar() {
        console.log('fechando');
    }


}
 

let carro = new car('amarelo', 10000, 'Fiat', 'Palio', 1.0, 0);


// comandos this e self 

//quando criamos uma classe podemos criar uma herança. Quando criamos uma herança, podemos criar um novo objeto, que herdará os atributos e metodos da classe pai.

class conversive extends car {
    constructor(cor, preco, fabricante, modelo, potencia, direcao) {
        super(cor, preco, fabricante, modelo, potencia, direcao);
    }

    
    
 abrir_capota() {
        console.log('abrindo capota');
    }



    acelerar() {
        console.log('acelerando');
    }
    frear() {
        console.log('freando');
    }
    virar(graus) {
        this.direcao = this.direcao + graus;
        return this.direcao;
    }
    abrir() {
        console.log('abrindo');
    }
    fechar() {
        console.log('fechando');
    }
}

let car1 = new conversive('amarelo', 10000, 'Fiat', 'Palio', 1.0, 0);


console.log(carro.cor)

console.log(car1.cor)

console.log(car1.abrir_capota())






//extend : herdar de uma classe e criar um novo objeto.

// super : chamar o metodo da classe pai.


// interface : definição de uma serie de regras para uma classe.

//interface no js : é um contrato que deve ser seguido por uma classe.

// criando uma interface












