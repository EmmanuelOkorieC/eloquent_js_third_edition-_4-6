let obj = {
 a: 1,
 b: 2, 
 hasOwnProperty: val => `your property is ${val}`
}
console.log(obj.hasOwnProperty('a'))
console.log(Object.prototype.hasOwnProperty.call(obj, 'b'))