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
  const result = calculadora(2+2)
  console.log(result)
