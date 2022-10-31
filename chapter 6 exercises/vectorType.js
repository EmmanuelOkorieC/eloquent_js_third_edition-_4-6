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
  
let vec1 = new Vec(2, 4)
console.log(vec1.length)