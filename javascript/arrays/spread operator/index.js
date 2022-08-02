// operador espalhar (spread operator)

let cars = ['Ford', 'Fiat', 'VW'];
let cars2 = ['Honda', 'Kia', 'Toyota'];

//montando um array so com os dois arrays

//spread operator

let newCars = [...cars, ...cars2];

console.log(newCars); // juntou os dois arrays, nao é apenas um array dentro do outro