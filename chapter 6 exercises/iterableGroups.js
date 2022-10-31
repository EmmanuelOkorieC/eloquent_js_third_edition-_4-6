//IMPLEMENTATION 1
Group.prototype[Symbol.iterator] = function() {
    return this.members[Symbol.iterator]()
}

//IMPLEMENTATION 2
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

//IMPLEMENTATION 3
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

