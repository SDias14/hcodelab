function exception (mensagem){
  this.mensagem = mensagem
  this.name = 'exception'
}

function numberException () {
  this.message = 'is not a number'
  this.name = 'numberException'
}

function divide(a, b) {

if(typeof b !=='number'){
  throw new numberException ().message;
} else if (typeof b !=='number'){
  numberException ().message;
} else  if (b === 0){
  throw new exception ('Cannot divide by zero');
}

  return a / b;
}


try {
  console.log(divide(10, 2));
  console.log(divide(50, "feijo"));
  console.log(divide(100, 0));
  console.log(divide(5, 10));
} catch (erro) {
  if (erro instanceof numberException) {
    console.log(erro.message);
  } else if (erro instanceof exception) {
    console.log(erro.message);
  }
}
  