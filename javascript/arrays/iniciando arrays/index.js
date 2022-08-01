let values1 = new Array('javascript', 'python', 1, false);
let values2 = ['php', 'treinamentos', 2, true, new Date()] // javascript pode ter um array multivalorado


console.log(values1);

// percorrendo um array
//for (let i = 0; i < values2.length; i++) {
 //   console.log(values2[i]);
//}

for (let i in values2) {
    console.log(values2[i]);
}