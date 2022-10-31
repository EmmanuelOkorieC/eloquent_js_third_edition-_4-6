//LOOP
function every(array, test) {
    for (let val of array) {
      if(!test(val)) return false
    }
    return true
  }
  
console.log(every([3, 6, 4], n => n > 2))

//SOME METHOD
function every2(array, test) {
    return !array.some(val => !test(val))
}
   
console.log(every2([3, 6, 4], n => n > 2))