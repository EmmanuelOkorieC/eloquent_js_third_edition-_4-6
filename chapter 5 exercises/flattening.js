let array = [[1, 2, 3], [1, 4], [4, 5, 6]]
let newArray = array.reduce((a, b) => a.concat(b))
console.log(newArray)