# Eloquent Javascript, 3rd Edition: A modern Introduction to programming
An overview, with solutions and explanation of exercises in chapters four to six of the ebook [Eloquent Javascript, 3rd Edition](https://eloquentjavascript.net/Eloquent_JavaScript.pdf) by Marijn Haverbeke

## Overview
### Chapter Four: Data Structures: Objects and Arrays
Objects in general allow us group values (including other objects) to build more complex structures. An *array* is a data type for storing sequences of values. It is written as a list of values between square brackets separated by commas `let numbers = [2, 3, 4, 10]`. Values are stored in arrays as indexes that start from zero, following a popular concept in programming known as *zero-based-counting*. To get at elements in an array, you write square brackets after an array passing in the index of the element you would like to get. `console.log(numbers[2]) //outputs 4`.

Values of type *object* are arbitrary collection of properties stored as *name: value* pairs separated by commas. They are created by using braces as an expression
```Javascript
  let collection = {
      name: "emmanuel",
      size: 12,
      sports: "football"
  }
```

Properties whose names are not valid binding names or valid numbers are quoted `"favorite food": "rice and eggs"`. It is possible to assign a value to a property expression with the `=` operator. This will replace the property's value if it already exists or create a new property to the object if it doesn't. `delete` operator is a unary operator that when applied to an object property, removes it. 

There are two main ways to access properties in javascript. With a dot `collection.name` or with square brackets `collection["size"]`. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the value in between the square brackets is the property name or a binding that points at that value. The dot notation accesses properties with valid binding names so to access properties with valid numbers or spaced out string values, you must use square brackets.

All javascript values are themselves objects that have properties - The exceptions being `null` and `undefined`(Accessing a property on one of them returns an error). They also contain *methods*. Properties that contain functions are called *methods* and every value has *methods* that belong to them.

Some Array methods include `push`, that takes a value as argument and adds it to the end of an array. `pop`, that does the opposite, removing the last value in an array and returning it. `shift` and `unshift` which behave like `push` and `pop` but adds and removes value from the start of an array. `indexOf` which takes a value, searches through the array from start to end and returns the index at which the passed in value was found or -1 if it wasn't found. `lastIndexOf` behaves like `indexOf` but starts searching from the end of the array. `slice` takes a start and end indices and returns an array that has only elements between the start index(inclusive) and end index(exclusive). If the end is not given, it takes all elements after the start index and if both start and end is not given, it copies the entire array. `concat` can be used to glue arrays together to create a new array. `includes` checks if a given value exists in an array and returns a `true` or `false`

String values also have a number of methods which includes `slice` and `indexOf` which resemble array methods with the same name. `trim` removes white spaces from start and end of a string. `split` splits a string on every occurence of another string and `join` joins it back again. `repeat` is used to repeat a string. `toUpperCase` when called converts your string to Upper case. `toLowerCase` converts it to lower case

`Math` object is a grab bag of number related utility functions for working with number values. These functions include `Math.max` that takes two or more numbers as argument and returns the maximum. `Math.min` that does the opposite and returns the minimum. Trigonometry functions that include `Math.cos`, `Math.sin`, `Math.tan` as well as inverse functions `Math.acos`, `Math.asin`, `Math.atan`. The math constant PI is available as `Math.PI`. `Math.random` returns a random number from zero(inclusive) to One(exclusive). `Math.floor` rounds down a number. `Math.ceil` rounds up a number. `Math.round` rounds a number. `Math.sqrt` takes a number and returns it's square root. `Math.abs` negates a value only if it is negative.

binary `in` when applied to a string and an object tells you whether that object has a property with that name. `Object.keys` function takes an object as argument and returns an array of that object's property names. `Object.assign` function copies all properties from an object to another. Strings, numbers and booleans are immutable(it is impossible to change values of these types) but objects work different. You can change their properties causing a single object value to have different contents at different times. Two different objects even when they share the same property name and values are not the same and will return `false` when you compare them (A different trend unlike with numbers and strings).


Instead of writing a regular `for` loop, you can loop through an array using a `for`/`of` loop which is written *for (let **name you choose to give binding** of **array**)*. The `for`/`of` loop can also be used for strings and some other data structures. A `for`/`in` loop on an array returns the index of all values it contains. And on an object, it returns it's property names.

It is useful for a function to accept any number of arguments and this is made possible with the *rest parameter* denoted with three dots `...` before a function's last parameter. This rest parameter is bound to an array containing all the arguments passed in and this array can be accessed in the function.
```Javascript
  function maximum(...numbers) {
  let value = -Infinity
  for (let num of numbers) {
     if (num > value)  value = num
  }
  return value
  }
  
  console.log(maximum(2, 6, 3, 12)) //outputs 12
```

The rest parameter also helps us spread our array into a new array
```javascript
  let array1 = [1, 2, 3]
  let array2 = [2, 4, ...array1]
  console.log(array2) //outputs [2, 4, 1, 2, 3]
```

When passing in arrays or objects as arguments to a function. you can *destructure* them to "look inside" of the value. With arrays, you use square brackets. With objects, you use braces. This also works with bindings created with `let`, `var` or `const`
```javascript
let [a, b, c] = [10, 20, 30]
let {age} = {name: "sarah", age: 20}
console.log(b) //outputs 20
console.log(age) //outputs 20
```

*Javascript Object Notation (JSON)* is a widely used data storage and communication format on the web, even in languages other than Javascript. It looks similar to javascript's way of writing arrays and objects with a few restrictions. All property names have to be surrounded by double quotes and only data expressions are allowed( No function calls, bindings or anything that involves actual computation. Comments too). `JSON.stringify` and `JSON.parse` are Javascript functions to convert data to and from this format

### Chapter Five: Higher Order Functions
The author starts this chapter by talking about abstraction. *Abstraction* hides details and gives us the ability to talk about problems at a higher (or more abstract) level. They make programs shorter, easier to interpret and easier to debug if there is an error.

Functions that operate on other functions either by taking them as arguments or by returning them are called *higher order functions*. They help us abstract our actions by hiding the functionality behind them
```javascript
   function forEach(array, funct) {
        for (let element of array) {
            funct(element)
        }
   }
   forEach([1, 2, 3], n => console.log(n)) //outputs 1 2 3
```
The code above is a function implementation of the array method `forEach`. It provides something like a `for`/`of` loop as a higher order function `[1, 2, 3].forEach(n => console.log(n)) //outputs 1 2 3` . `filter` is also a standard array method. It filters out elements in the array that do not pass a test. The function implementation would look like this
```javascript
  function filter(array, funct) {
    let newArray = []
     for (let element of array) {
         if(funct(element)) {
            newArray.push(element)
         }
     }
     return newArray
  }
  console.log(filter([1, 2, 3], n => n > 1)) //outputs [2, 3]
```

The `filter` function is pure. It does not modify the array it is given, rather it creates a new one passing in elements that passed the test. The array method `map` transforms an array by applying a function to all of it's elements and building a new array from the returned values
```javascript
  function map(array, funct) {
     let newArray = []
     for (let element of array) {
       newArray.push(funct(element))
     }
     return newArray
  }
  console.log(map([1, 2, 3], n => n * 2)) //outputs [2, 4, 6]
```

The array method `reduce` builds a single value by repeatedly taking a single element from the array and combining it with the current value. The function implementation is a bit different from the rest.
```javascript
  function reduce(array, funct, start) {
    let current = start
    for (let element of array) {
      current = funct(current, element)
    }
    return current
  }
  console.log(reduce([1, 2, 3], (a, b) => a + b, 0)) //outputs 6
```
In the `reduce` method, we do not necessarily have to specify a start. If one is not given, the method automatically makes the first element of the array it's start value. `console.log([1, 2, 3].reduce((a, b) => a + b)) //outputs 6`. The `some` method is another higher order function. It takes a test function and tells you if that function returns `true` for any of the elements in the array.
```javascript
   function some(array, funct) {
      for (let element of array) {
        if(funct(element)) return true
      }
      return false
   }
   console.log(some([1, 2, 3], n => n % 2 == 1)) //outputs true
```
The array method `findIndex` is somewhat like `indexOf`, but instead of looking for a specific value, it finds the first value for which the given function returns `true`. Like `indexOf`, it returns -1 when no such element is found.
```javascript
  function findIndex(array, funct) {
     for (let i = 0; i < array.length; i++) {
        if(funct(array[i])) return i
     }
     return -1
  }
  console.log(findIndex([1, 2, 3], n => n % 2 == 1)) //outputs 0
```
### Chapter Six: Secret Life of Objects
*Object-oriented programming* is a set of techniques that use Objects (and related concepts) as the central principle of program organization. The core idea is to divide programs into smaller pieces (objects) and make each piece responsible for managing it's own state. This way knowledge about the way a piece of the program works can be kept *local* to that piece. Different pieces of such a program interact through *interfaces*, limited sets of functions and bindings (methods and properties of objects) that provide useful functionality at a more abstract level. This process of separating interface from implementation is known as *encapsulation*.

When a function is called as a method, the binding `this` in it's body automatically points at the object that it was called on.
```javascript
  let obj = {
      a: 1, 
      b: 2, 
      c: function () {
        return `${this.a} and ${this.b}`
      }
    }
      console.log(obj.c()) //outputs 1 and 2
```

`this` can be passed explicitly. You can use a function's `call` method which takes the `this` value as it's first argument and treats further arguments as normal parameters
```javascript
 function speak(line) {
   console.log(`${this.type} rabbit says ${line}`)
 }
 
 let handsomeRabbit = {type: "handsome"}
 speak.call(handsomeRabbit, "hi") //outputs handsome rabbit says hi
```
Since the value of the `this` binding for functions depends on the way it is called, you can not refer to them in a regular function defined with the `function` keyword. Arrow functions are different, they do not bind their own `this` but can see the `this` binding of the scope around them.

In addition to an object's set of properties, most objects also have a `prototype`. A `prototype` is another object used as a fallback source of properties. when an object gets a request for a property it does not have, it's prototype will be searched then its prototype's prototype and so on. This is why calling a `toString` method on an empty object returns a value. The prototype of most objects is the `Object.prototype` whose prototype is `null`. 

Not all objects have `Object.prototype` as their prototype. They instead have another object that provides a different set of default properties. All functions derive fom `Function.prototype` and arrays derive from `Array.prototype`. Prototype objects like `Array.prototype` and `Function.prototype` will itself have a prototype, most often `Object.prototype`. You can use `Object.create` to create an object with a specific prototype.
```javascript
 let protoObject = {
   speak(line) {
      console.log(`${this.type} rabbit says ${line}`)
   }
 }
 let handsomeRabbit = Object.create(protoObject)
 handsomeRabbit.type = "handsome"
 handsomeRabbit.speak("hi") //outputs handsome rabbit says hi
```
Passing in `null` to `Object.create` returns an object without a prototype. The Object-oriented programming concept *classes* is a more formal approach to the Javascript prototype system. A *class* defines the structure of an object (what methods and properties it has). An object created with a *class* structure is called an *instance of the class*.
Prototypes are useful for defining properties for which all *instances of a class* share the same value, so properties that differ per instance must be stored in the objects themselves. A *constructor function* helps us define a *class* that derives from the proper prototype and stores properties that differ per *instance of the class*. The `new` keyword in front of a function call treats it as a *constructor*. This means an object with the right prototype is automatically created, bound to `this` in the function and returned. The prototype object used when constructing objects is found by taking the `prototype` property of the constructor function. By default it holds a plain empty object which it derives from `Object.prototype`. You can overwrite this object with a new object or you can add properties to the existing object
```javascript
function Rabbit(type) {
    this.type = type
}

Rabbit.prototype.speak = function(line) {
  console.log(`${this.type} rabbit says ${line}`)
}

let beautifulRabbit = new Rabbit("beautiful")
let purpleRabbit = new Rabbit("purple")

beautifulRabbit.speak("hi") //outputs beautiful rabbit says hi
purpleRabbit.speak("hi") //outputs purple rabbit says hi
```

By convention, the first letter of constructor names are capitalized so that they can easily be distinguished from other functions. Javascript classes are a less awkward way to write constructor functions with a prototype property. The `class` keyword starts a class declaration which allows us define a constructor and a set of methods all in a single place. The code above could be rewritten 
```javascript
 class Rabbit {
   constructor(type) {
     this.type = type
   }
   
   speak(line) {
     console.log(`${this.type} rabbit says ${line}`)
   }
 }
 
 let beautifulRabbit = new Rabbit("beautiful")
 let purpleRabbit = new Rabbit("purple")
```
If you add a property to an object with an already existing name in the prototype, the property in the prototype is overridden and the property added to the object takes precedence. This is the basis of *polymorphism*. You can write a code to work with objects of a certain interface by redefining properties or methods in the prototype. 

A `Map` is a data structure that associates values (keys) with other values. They have no prototype unlike objects and they allow any type of keys (objects included). `set`, `get` and `has` are part of the interface of the `Map` object. The `set` method takes two arguments, stores the first one as the key or property name and the second as the value. The `get` method takes a property name as an argument and returns it's value. The `has` method returns true if the `Map` object contains the property name passed in as an argument. Symbols are values created with the `Symbol` function. Unlike strings, symbols are unique (you can not create the same symbol twice). This means we can use symbols to define properties that can co-exist with other properties even when they share the same name. Object given to a `for`/`of` is expected to be iterable meaning it must have a method named with the `Symbol.iterator` symbol (a symbol value defined by the language stored as a property of the symbol function). When called, it should return a second interface, *the iterator* object which has a next method that returns the next result. That result should be an object with a *value* property that provides the next value if there is one and a *done* property which should be true when there are no more results and false otherwise. You can add this interface to your own objects to make them iterable.

Getters in objects are methods that hide their method call. You can access them without calling them. 
```javascript
   let varyingSize = {
      get size() {
        return Math.floor(Math.random() * 10)
      }
   }
   console.log(varyingSize.size) //outputs random number between 0 to 9
```

Setters (defined with the `set` keyword) do something similar but is used to assign a value to a property. Methods that have `static` written before their name in a class declaration are stored on the constructor. Such methods won't have access to class instance but can for example be used to provide additional ways to create instances.

Javascript prototype system makes it possible to create a class that inherits properties from another class but with new definitions for some of those properties. This concept in object-oriented programming is known as *inheritance*. The class that inherits properties is known as the *subclass* and the class that shares it's properties is known as the *superclass*. The keyword `extends` in front of a *subclass* indicates that this class shouldn't be based on the default Object prototype but on some other class, the *superclass* whose name comes right after the keyword. The *subclass* has it's own constructor but in that constructor can access it's *superclass's* constructor using the `super` keyword. In the `super` constructor, we can modify some of the properties of our *superclass*. The `super` keyword in a *subclass* method (not constructor) can be used to call a specific method from a *superclass's* set of methods. 

You can use the `instanceOf` operator to check if an object was derived from a specific class.

## Exercises
### Chapter Four: Data Structures: Objects and Arrays
* 4.1 [Sum of a Range](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%204%20exercises/sumOfRange.js)

   For this excercise, i wrote two functions, `range` and `sum`. `range` takes two arguments, `start` and `end` and returns an array containing all numbers from `start` up to `end`(inclusive). `sum` takes an array of numbers and returns the sum of these numbers.
   
 To get this working i defined a binding `array` in the `range` function and assigned an empty array object to it
```javascript
   function range(start, end) {
      let array = []
      for (let i = start; i <= end; i++) {
          array.push(i)
      }
      return array
   }
 ```
   
 Then i wrote a `for` loop and defined  a binding `i` in it. `i` takes `start` as it's start value, `end` as it's end value in the end condition, and increments by 1. in the loop, I added all values `i` returned into the empty array using the array method `push` and after the loop, i returned `array`

   For the `sum` function, i defined a binding `count` and assigned the value `0` to it. 
   ```javascript
     function sum(array) {
       let count = 0
       for (let element of array) {
            count += element
       }
       return count
     }
   ```
   Then i looped through all elements of the array i passed in as  argument, adding each element to `count` everytime it iterates and reassigning it to the binding `count`. Then after the loop, i returned `count` which at that point would hold the sum of all elements in the array.
   
   As a bonus i was tasked to modify the `range` function to take an optional third argument `step`. This `step` would be the incremental value for my range of numbers. If it is not given, the default value would be 1. I was also tasked to make it work for a negative `step` when the start value is greater than the end value. This negative `step` by default would be -1. I started by writing some exceptions, The first for when the `start` value is greater than the `end` value but the step is positive i.e `range(5, 1, 2)`. The second for when the `end` value is greater than the `start` value but the step is negative i.e `range(1, 10 -1)`. In both cases the `range` function returns a string telling you it can't compute. Else it progresses to the function itself. 
   ```javascript
   function range(start, end, step = start < end ? 1 : -1) {
      if(start < end && step < 0) {
         return "last parameter must be positive"
      }
      if (start > end && step > 0) {
         return "last parameter must be negative"
      }
      let array = []
      for (let i = start; start < end ? i <= end : i >= end; i += step) {
         array.push(i)
      }
      return array
    }
    
   function sum(array) {
      if (typeof array != "object") return "pass in an object type"
      let count = 0
      for (let element of array) {
         count += element
      }
      return count
    }

    console.log(sum(range(1, 10, 1))) //outputs 55
   ```
   For the `for` loop i defined in the `range` function, i incremented `i` by the value of `step` and i modified the end condition to work in cases where `start` is less than `end` and vice versa  using the *ternary operator*. This also came in handy when defining the default value for `step`. I also modified the `sum` function to return a string telling you to "pass an object type" when it takes anything other than an array or object as argument
 
* 4.2 [Reversing An Array](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%204%20exercises/reverseArray.js)

   For this exercise, i had to write two functions `reverseArray` and `reverseArrayInPlace`. They would work like the array method `reverse` that changes an array by inverting the order in which the elements appear. `reverseArray` takes an array as argument and produces a new array that has the same elements in the inverse order. `reverseArrayInPlace` would do the same thing but by modifying the array i pass in as an argument.
   
   In my `reverseArray` function, i defined a binding `newArray` and assigned an empty array object to it.
   ```javascript
   function reverseArray(array) {
      let newArray = []
      for (let element of array) {
        newArray.unshift(element)
      }
      return newArray
    }
    console.log(reverseArray([3, 2, 4, 5])) //outputs [5, 4, 2, 3]
   ```
   Then i looped through all elements of the array i passed in as argument, adding each element to the beginning of `newArray` using the array method `unshift`. The loop iterates from the first value, meaning the next value will always be added to the beginning of the array. At the end of the loop, i return `newArray`
   
   For the `reverseArrayInPlace` function, i tried reassigning the index of elements in the array. The first index gets assigned the last element in the array, the second index gets assigned the second to the last and so on  but on first try it did not work
   ```javascript
     function reverseArrayInPlace(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[array.length - 1 - i]
        }
        return array
     }
     console.log(reverseArrayInPlace([1, 2, 3, 4])) //outputs [4, 3, 3, 4]
   ```
   After hours of wondering why it did not work, i finally realized my mistake, the first half of the array's index stored the reasssigned values and subsequent reassigning of the other half of the array's index was referencing that stored value (0 became 3, 1 became 2, 2 became my newly assigned 1 and 3 became my newly assigned 0). So i came up with a litte solution. I looped through only the first part of the array by dividing `array.length` by 2 then i reassigned the index of those elements. 
    ```javascript
   function reverseInPlace(array) {
     for (let i = 0; i < array.length / 2; i++) {
       let beginIndex = array[i]
       array[i] = array[array.length - i -1]
       array[array.length - i - 1] = beginIndex
     }
     return array
   }  

   console.log(reverseArrayInPlace([3, 8, 7, 4, 5])) //outputs [5, 4, 7, 8, 3]
   ```
   I needed a way to reassign the index of the second half of the array so i defined a binding `beginIndex` that gets assigned each element from the first part of the array everytime it iterates. I need `beginIndex` so i wouldn't lose the element after reassigning. Then at the end of the loop i reassigned the index of the second part of the array (starting from the end) as `beginIndex`. Phew. I wondered if this would work if length of the array was odd and not even. it did, mainly because elements in the middle remain unchanged
  
* 4.3 [A List](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%204%20exercises/list.js)

   For this exercise, i was tasked to write a function `arrayToList` that takes an array as argument and returns a *List*. A *list* is a nested set of objects, with the first holding a reference to the second, the second to the third and so on i.e `{value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}`. After getting this to work, i also wrote a `listToArray` function that produces an array from a list. A `prepend` function that takes an element and a list and returns a new list that adds the element to the input list. And finally a `nth` function that takes a list and number as argument and returns the element at the given position in the list.
   
   My approach to this exercise was recursion recursion recursion. It was all i could think of as a solution to the exercise and i successfully implemented it. The list object is supposed to have a `value` property that indicates the number of the object and a `rest` property that contains subsequent objects with the same properties. The `arrayToList` function returns this object with the `value` property being the first element in the array and the `rest` being a recursive call to the `arrayToList` function. 
    ```javascript
   function arrayToList(array) {
     if(array.length == 0) return null
     let shiftedValue = array.shift()
     return {value: shiftedValue, rest: arrayToList(array)}
    }
    console.log(arrayToList([1, 2, 3]))
    //outputs {value: 1, rest: {value: 2, rest: {value: 3, rest:null}}}
   ```
   That first element in the array is removed from the array using the array method `shift` and stored in a binding `shiftedValue` so that for each recursive call, the array's length is reduced by 1. When the array's length becomes 0, my recursive call breaks and returns `null`.
  
   For my `listToArray` function, i defined a binding `array` and assigned an empty array object to it. 
    ```javascript
    function listToArray(list) {
       let array = []
       array.push(list.value)
       if(list.rest === null) return array
       return array.concat(listToArray(list.rest))
   }
   console.log(listToArray(arrayToList([1, 2, 3, 4])))
   //outputs [ 1, 2, 3, 4 ]
   ```
   Then i added the list's current value to that array using the array method `push`. When the list's rest property is `null`, it returns that array else it returns a new array gotten by combining it's own array with a recursive call to `listToArray` that takes the current list's rest property `list.rest` as argument. This recursive call will keep returning an array for each `rest` object until it hits a break when the `rest` property points to `null`. Then it concats all returned array value.

   The `prepend` function was pretty straight forward. I returned a new list object that had the element as the `value` property and the list as as the `rest` property
   ```javascript
   function prepend(element, list) {
     return {value: element, rest: list}
   }
   console.log(prepend(0, arrayToList([1, 2])))
   //outputs {value: 0, rest: {value: 1, rest: {value: 2, rest:null}}}
   ```
   For the `nth` function, i used my implementation from `listToArray` 
   ```javascript
    function nth(list, number) {
       let array = []
       array.push(list.value)
       if(list.rest === null) return array
       array = array.concat(listToArray(list.rest))
       return array[number]
    }
   ```
   Except instead of returning the new combined array, i reassigned it to `array` and returned the value of the element at index `number` of the array. This value returns `undefined` when there is no such element

* 4.4 [Deep Comparison](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%204%20exercises/deepComparison.js)

   For this exercise, i wrote a function `deepEqual` that takes two values and returns true only if they are the same value, or objects with the same properties
   
     ```javascript
    function deepEqual (val1, val2) {
    if(val1 === val2) {
       return true
    }
    if(typeof val1 != "object" || typeof val2 != "object" || 
        val1 == null || val2 == null) {
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
    for (let val of Object.values(val1)) {
        if (!Object.values(val2).includes(val)) {
        return false
      }
    }
    return true
   }
   ```
   To start with, i compared the values directy using the `===` operator (to avoid *type coercion*). If those values are strings or numbers and they are the same, it returns `true`. Else it progresses to the next `if`. I want to only compare objects this time, so if one of the two arguments is not an object or if it is `null` (`typeof` `null` is also object) then it returns `false`. If this isn't the case, it compares the length of the objects property and if they are not the same, returns `false`. The i looped through the property *names* and *values* of the first object comparing them to the second object's property *names* and *values*. If there is a discrepancy, it returns `false`. At the end, if it doesn't meet any of the conditions then it is Equal and returns `true`.
 
   My function did not work for nested objects, mainly because comparing objects will return `false`. So i had to find a way to compare the object values if they were objects. Recursively calling my `deepEqual` function could work so i implemented it. 
   ```javascript
   function deepEqual (val1, val2) {
    if(val1 === val2) {
      return true
    }
    if(typeof val1 != "object" || typeof val2 != "object" || 
     val1 == null || val2 == null) {
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
    
    return true
   }
   ```
   I re-structured the loop that compared values to instead recursively compare values of every property in both objects and if any of those recursive calls return `false`, i return `false` in the main function
   
### Chapter Five: Higher Order Functions
* 5.1 [Flattening](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%205%20exercises/flattening.js)

   In this exercise, I was expected to "flatten" an array of arrays into a single array using the array methods `reduce` and `concat`. Pretty straight forward exercise.
   ```javascript
   let array = [[1, 2, 3], [1, 4], [4, 5, 6]]
   let newArray = array.reduce((a, b) => a.concat(b))
   console.log(newArray)// outputs [1, 2, 3, 1, 4, 4, 5, 6]
   ```
    The `reduce` method automatically takes the first array in `array` as the start value since i did not indicate one
    
* 5.2 [Your Own Loop](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%205%20exercises/yourOwnLoop.js)

   For this exercise, i wrote a higher order function `loop` that provides something like a `for` loop statement. It takes a `value`, `test` function, `update` function and a `body` function. Based of the author's suggestion, i used a normal `for` loop to define this. 
   ```javascript
   function loop(value, test, update, body) {
     for (let val = value; test(val); val = update(val)) {
        body(val)
      }
    }
   loop(0, n => n < 3, n => n + 1, console.log) //outputs 0 1 2 
   ```
   
   I stored the value as `val` in my for loop. `test` function takes `val` as argument and checks if the iteration should end. `update` function takes `val` as argument and returns an updated value that i reassign to `val` for the next iteration. `body` function is applied to all values  `val` returns in the loop
   
* 5.3 [Everything](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%205%20exercises/everything.js)

  The array method `every` works almost like the `some` method except it returns `true` when my test function is `true` for every element in the array. In this exercise, i implemented `every` as a function and wrote two versions of it. one using a loop and one using the `some` method. 
  
  For the first version, i looped through each element of the array and ran my test function on them. 
   ```javascript
   function every(array, test) {
    for (let element of array) {
       if(!test(element)) return false
    }
   return true
   }
  ```
  
   If the test function returns `false` for any element in the array, my `every` function returns `false`. If it doesn't, then it simply exits the loop and returns `true`
  
 The `some` method returns `true` if any of the element in the array returns `true` for the function i pass in as argument. 
 ```javascript
     function every2(array, test) {
      return !array.some(val => !test(val))
     }
  ```
 So i started by inverting results of my test function so the function i pass into `some` returns `true` when any of the elements of the array fail my test and `false` when all the elements pass my test. Then i inverted the value returned from the method call so it becomes `true` for when all the elements pass my test and `false` when any of them fails
  
* 5.4 [Dominant writing Direction](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%205%20exercises/dominantDirection.js)

  To understand this exercise, you need to take a look at the [data set](https://eloquentjavascript.net/code/scripts.js) the author worked with throughout this chapter. It contains pieces of information about the 140 scripts defined in Unicode (name, the direction in which it is written, Whether it is still in use, Unicode ranges assigned to it and a link to more information). 
  
  This exercise required me to use helper functions `characterScript` and `countBy` already defined by the author in this chapter to write a function that computes the dominant writing direction in a string of text. `characterScript` takes a character code as argument and returns a corresponding script (if any). 
  ```javascript
    function characterScript(code) {
     for (let script of SCRIPTS) {
       if (script.ranges.some(([from, to]) => {
       return code >= from && code < to })) {
       return script;
       }
     }
     return null;
     }
     ```
  `countBy` takes an array and a function (that computes a group name for a given element) as arguments, and returns an array of objects, each of which names a group and tells you the number of elements found in that group. 
     ```javascript
     function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
     counts.push({name, count: 1});
    } else {
     counts[known].count++;
    }
    }
     return counts;
    }

     ```
  We will use this `countBy` function to count characters with the same direction. I started by doing just that, i passed my text and function to `countBy`. 
  ```javascript
    function dominant(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0))
      return script ? script.direction : "none"
    }).filter(({name}) => name != "none")
  
    let directions = ["ltr", "rtl", "ttb"]
    let num = -Infinity
    let dominant;
    for (let direction of directions) {
       let total = scripts.filter(({name}) => name == direction)
       .reduce((n, {count}) => n + count, 0)
       //console.log(direction, total)
       if (total > num) {
        num = total
        dominant = direction
       } 
    }
  
    return dominant
  }
    console.log(dominant("Hello world")) //outputs ltr
   ```
  This function takes each character of the text, passes it's character code as argument to `characterScript` and returns the direction property of the script it returns or "none" if it doesn't find any. Then i filtered the group the `countBy` function returns removing the group with name property of "none" and assigned this result to a binding `scripts`. Then i proceeded to define three bindings. `directions` is an array of the three main directions defined in the data set. `num` holds `-Infinity` that i use to compare and reassign values and `dominant` is undefined. I looped through `directions` using each element to filter out groups in `script` with the same name and reducing the count property to give me a value. This value returns 0 when there is no matching group in `script`. I assigned this value to a binding `total` and for each iteration of `directions` i check if `total` is greater than `num`. If this returns true, i reassign `num` as `total` and assign the direction with that bigger value to the `dominant` binding and proceed to the next iteration. After it is done, i return the `dominant` binding
   
   
### Chapter Six: The Secret Life of Objects
* 6.1 [A Vector type](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%206%20exercises/vectorType.js)

   For this exercise, i wrote a class `Vec` that represents a vector in a 2D space. it takes `x` and `y` as parameters and stores them as properties with the same name. It has two methods `plus` and `minus` that takes another vector as argument and returns a new vector with the the sum or difference of the two vectors' `x` and `y` values. It also has a getter property `length` that computes the length of the vector from the origin (0, 0). This exercise was pretty straight forward. 
    ```javascript
    class Vec {
      constructor(x, y) {
       this.x = x
       this.y = y
     }

    plus(vector) {
      return new Vec(this.x + vector.x, this.y + vector.y)
    }

    minus(vector) {
     return new Vec(this.x - vector.x, this.y - vector.y)
    }

    get length() {
     return Math.round(Math.sqrt(((this.x - 0) ** 2) + ((this.y - 0) ** 2)))
    }
   }
   ```
   To get the length from the origin, i used *pythagoras theorem*, adding the square of differences between the `x` values and square of differences between the `y` values and finding it's square root. Then i rounded it to give me a whole number using `Math.round`
  

* 6.2 [Groups](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%206%20exercises/groups.js)

   For this exercise, i wrote a class `Group` that models the data structure `Set`. A `Set` holds a collection of values but unlike `Map` does not associate this values with other values. A value can be a part of a set only once (adding it again does not have any effect). This class `Group` much like `Set` would have `add`, `delete` and `has` methods. It's constructor creates an empty group. `add` adds a value to the group but only if it's not a member. `delete` removes a value from the group if it was a member and `has` returns a boolean indicating if the value passed in as argument is a member of the group. This class would also have a static method `from` that takes an iterable object as argument and creates a group that contains all values produced by iterating over it. 
   
   I started by defining my class and creating an empty group in the  constructor which i assigned to the property `members`. 
    ```javascript
    class Group {
      constructor() {
        this.members = []
      }

    add(value) {
      if (!this.members.includes(value)) this.members.push(value)
    }

    delete(value) {
     if (this.members.includes(value)) { 
     this.members = this.members.filter(n => n != value)
     }
     }

    has(value) {
      if (this.members.includes(value)) return true
      else return false
    }

    static from(object) {
    let group = new Group()
    for (let value of object) {
      group.add(value)
    }
    return group
   }
  }
   ```
   Then i defined the `add` method which uses the array method `includes` to check if the value passed in as argument exists in the group. If it doesn't, it adds the value to the group using the array method `push`. I did something similar for the `delete` and `has` methods. If the group contains the value i pass in as argument to the `delete` method, it filters that value out and reassigns the new array returned by the `filter` method to the `members` property. And if the group contains the value i pass into the `has` method, it returns `true` else it returns `false`. For the static method `from`, i needed a way to add all elements of the iterable object (Could be array, string, Set) to a new group. So i instantiated the class `Group` and assigned it to a binding `group`. Then i looped through the elements of the iterable object adding each one to `group` with the `add` method i  defined in the *class*. Then after iterating, i returned `group`

   
* 6.3 [Iterable Groups](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%206%20exercises/iterableGroups.js)

   For this exercise, i made the class `Group` i defined in the previous exercise iterable. Could have been pretty straightforward since i used an array to define the group (the `members` property). All i would do is call it's `Symbol.iterator` function in the `Symbol.iterator` i define for my class `Group`.
   ```javascript
     Group.prototype[Symbol.iterator] = function() {
     return this.members[Symbol.iterator]()
  }
   ```
   But the author advised against that so i had to define my own *iterator* object. I defined it directly in the class's `Symbol.iterator` function at first
   ```javascript
   Group.prototype[Symbol.iterator] = function() {
   let x = -1
      return {
          next: () => {
               x++
               if(x == this.members.length) return {done: true}
               else return {value: this.members[x], done: false}
          }
      
      }
   }
   ```
   This *iterator* object i return has a `next` method. This `next` method uses an arrow function because i want it to reference the `this` property of the group. If i had used a normal function to define `next`, it would not have worked as it would have referenced the iterator object itself. 
   
   In the `next` method, i use the local binding `x` i defined in the `Symbol.iterator` function to define the object it returns. `x` references the group's array index. For every call to `next`, i add 1 so `x` starts from 0 when i check my conditions. Because of `zero-based-counting`, once `x` equals the length of the group array, it means we are done iterating and the `next` method returns an object with a `done` property of `true` else it returns an object with a `value` property referencing the current element of the group at index `x` and a `done` property of `false`. After getting this to work, i decided to define my *iterator* object as a class and instantiate it in the class's `Symbol.iterator`
   ```javascript
    class GroupIterator {
      constructor(group) {
      this.group = group
      this.x =  -1
     }
  
    next () {
    this.x++
    if (this.x == this.group.members.length) return {done: true}
    else {
      return {value: this.group.members[this.x], done: false}
     }
    }
   }

    Group.prototype[Symbol.iterator] = function() {
      return new GroupIterator(this)
    }
   ```
   This followed the same pattern as in my last approach but gave me a little level of abstraction
   
* 6.4 [Borrowing a Method](https://github.com/EmmanuelOkorieC/eloquent_js_third_edition-_4-6/blob/main/chapter%206%20exercises/borrowingMethod.js)

   For this exercise, i had to think of a way to call `hasOwnProperty` on an object that has it's own property by that name. 
   ```javascript
   let obj = {
   a: 1, 
   b: 2, 
   hasOwnProperty: val => `your property is ${val}`
   }
   console.log(obj.hasOwnProperty('a')) //outputs your property is a
   console.log(Object.prototype.hasOwnProperty.call(obj, 'b')) //outputs true
   ```
   Since `this` can be passed explicity, i called the `Object.prototype`'s `hasOwnProperty` using the function's call method and i passed in my object as `this` and the property as further argument.  

