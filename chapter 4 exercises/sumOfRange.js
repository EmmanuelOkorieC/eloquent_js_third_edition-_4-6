//RANGE
function range(start, end, step = start < end ? 1 : -1) {
    if(start < end && step < 0) {
      return "last parameter must be positive"
    }
    if (start > end && step > 0) {
      return "last parameter must be negative"
    }
    let array = []
    for (let i = start; start < end ? i <= end : i>=end; i += step) {
      array.push(i)
    }
    return array
  }
  
  console.log(sum(range(1, 10, 1)))

//SUM
  function sum(array) {
    if (typeof array != "object") return "you must pass in an object type"
    let count = 0
    for (let element of array) {
      count += element
    }
    return count
  }