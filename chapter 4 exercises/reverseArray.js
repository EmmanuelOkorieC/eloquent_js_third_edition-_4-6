//REVERSE ARRAY
function reverseArray(array) {
    let newArray = []
    for (let element of array) {
      newArray.unshift(element)
    }
    return newArray
  }

console.log(reverseArray([3, 2, 4, 5, 6]))

//REVERSE ARRAY IN PLACE
function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let beginIndex = array[i]
    array[i] = array[array.length - i -1]
    array[array.length - i - 1] = beginIndex
  }
  return array
}

console.log(reverseInPlace([2, 3, 8, 7, 4, 5]))
  