// 

calcular = (numero1, numero2, operador) => {

    return eval(`${numero1} ${operador} ${numero2}`);
}

let a = 20 

let b = 10

console.log(calcular(a, b, '*'));