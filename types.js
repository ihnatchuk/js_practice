console.log(0==null)// false
console.log(0===null)// false
console.log(typeof null)// object
console.log(null?true:false)// false
console.log(''==null)// false
console.log(''==[])// true
console.log(''=={})// false

console.log(0==[])// true
console.log(0=={})// false
console.log(0=='0')// true
console.log(false==[])// true
console.log(false===[])// false
const a=null
let b
console.log(b?true:false)// false
console.log(a?true:false)// false
console.log([]?true:false)// true
console.log({}?true:false) // true
console.log(undefined?true:false) // false
console.log(false==undefined)  // false

console.log(false==Boolean(undefined)) // true
console.log(false==Boolean(NaN)) // true
console.log(false==NaN)  // false
console.log(0==NaN)  // false
console.log(''==NaN)  // false

