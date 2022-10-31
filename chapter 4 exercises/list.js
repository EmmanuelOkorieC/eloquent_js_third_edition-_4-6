//ARRAY TO LIST
function arrayToList(array) {
    if(array.length == 0) return null
    let shiftedValue = array.shift()
   //  console.log(array)
    return {value: shiftedValue, rest: arrayToList(array)}
     
   }
console.log(arrayToList([1, 2, 3])) 

//LIST TO ARRAY
function listToArray(list) {
    let array = []
    array.push(list.value)
    if(list.rest === null) return array
    return array.concat(listToArray(list.rest))
}

console.log(listToArray(arrayToList([1, 2, 3])))

//PREPEND
function prepend(element, list) {
    return {value: element, rest: list}
}

console.log(prepend(0, arrayToList([1, 2, 3])))

//NTH
function nth(list, number) {
    let array = []
    array.push(list.value)
    if(list.rest === null) return array
    array = array.concat(listToArray(list.rest))
    return array[number]

}

console.log(nth(arrayToList([10, 20, 30]), 0))