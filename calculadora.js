function calculadora(numberA, numberB, operation){
  if(operation ==='**'){
    return  numberA ** numberB
  }
  else if(operation === '-'){
    return numberA - numberB
  }
  if (operation === '*'){
    return  numberA * numberB
  }
  if (operation === '+'){
    return numberA + numberB
  }
  if (operation === '/'){
    return numberA / numberB
  }
}
console.log(calculadora(2,2,'+'))
