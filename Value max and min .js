function maxandmin (numberA, numberB){
  if(numberA > numberB) {
   console.log(`value max = ${numberA} ,value min = ${numberB}`)
  }
  else if(numberA < numberB) {
   console.log(`value max = ${numberB} ,value min = ${numberA}`)
  }
  if(numberA === numberB){
   console.log('values are the same')
  }
};
maxandmin(3,30)
