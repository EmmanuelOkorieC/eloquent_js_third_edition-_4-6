function deepEqual (val1, val2) {
    if(val1 === val2) {
      return true
    }
     if(typeof val1 != "object" || typeof val2 != "object" || val1 == null || val2 == null) {
      return false
     }
     if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false
     }
     for (let keys of Object.keys(val1)) {
      if (!Object.keys(val2).includes(keys)) {
        return false
      }
    }
    for (let keys of Object.keys(val1)) {
      if (!deepEqual(val1[keys], val2[keys])) {
        return false
      } 
    }
    // for (let val of Object.values(val1)) {
    //   if (!Object.values(val2).includes(val)) {
    //     return false
    //   }
    // }
    return true
}

console.log(deepEqual({name: "emma", age: {art: 25, time: {a: "art"}}, end: {vet: 14}}, {name: "emma", age: {art: 25, time: {a: "art"}}, end: {vet: 14}}))
console.log(deepEqual([1, 2, 3], [1, 2, 3]))