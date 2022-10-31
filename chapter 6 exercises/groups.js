class Group {
    constructor() {
      this.members = []
    }
  
    add(value) {
      if (!this.members.includes(value)) this.members.push(value)
    }
  
    delete(value) {
      if (this.members.includes(value)) this.members = this.members.filter(n => n != value)
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
  
  let group1 = Group.from([1, 1, 2, 3, 4, 5, 5])