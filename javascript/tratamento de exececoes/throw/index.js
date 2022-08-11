function numberException () {
  this.message = 'is not a number'
  this.name = 'numberException'
}

function zeroException () {
  this.message = 'not divisible by zero'
  this.name = 'zeroException'
}




function divide(a, b) {

if(typeof a !=='number' || typeof b !=='number'){
  throw new numberException ().message;
} else if (b === 0){
  throw new zeroException ().message
} 

  return a / b;
}


console.log(divide(4, 2)) // 2
console.log(divide(100, 0)) 
console.log(divide(100, "50")) // throws an error