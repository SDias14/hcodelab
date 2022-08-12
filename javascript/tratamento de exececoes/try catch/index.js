function Excecao (mensagem){
  this.message = mensagem
  this.name = 'Excecao'
}

function NotNumberException () {
  this.message = 'É necessario informar um numero';
  this.name = 'NotNumberException'
}

function divide(a, b) {

if(typeof a !== 'number'){
  throw new NotNumberException();
} else if (typeof b !=='number'){
  throw new NotNumberException();
} else  if (b === 0){
  throw new Excecao ('Cannot divide by zero');
}

  return a / b;
}


try {
  console.log(divide(10, 2));
} catch (erro) {
  if (erro instanceof NotNumberException) {
    console.log(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
} finally {
  console.log('Finally');
}

try{
  console.log(divide(50, "feijo"));
}catch (erro) {
  if (erro instanceof NotNumberException) {
    console.log(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
} finally {
  console.log('Finally');
}


try{
  console.log(divide(100, 0));
}catch (erro) {
  if (erro instanceof NotNumberException) {
    console.log(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
} finally {
  console.log('Finally');
}


try{
  console.log(divide(5, 10));
}catch (erro) {
  if (erro instanceof NotNumberException) {
    console.log(erro.message);
  } else if (erro instanceof Excecao) {
    console.error(erro.message);
  }
} finally {
  console.log('Finally');
}
  