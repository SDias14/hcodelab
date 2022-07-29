/*

let product = 0;

for (let i = 0; i < 10; i++) {
 product++;
}

console.log product);

*/


//tabuada do 5 


/*

let tabuada = 7;
let product = 0;


for (let i = 0; i < 10; i++) {
 product = tabuada * i;
  console.log(tabuada + " x " + i + " = " + product);
}

*/

//for dentro de for

let numberTabuada = 0;
let product = 0;

for (let i = 0; i < 10; i++) {
  numberTabuada = i;
  for (let j = 0; j < 10; j++) {
    product = numberTabuada * j;
    console.log(numberTabuada + " x " + j + " = " + product);
  }
  console.log("=============================");
}