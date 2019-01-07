const {from, defer} = require('rxjs')

console.log('BEFORE make from')
const fromObs = from(new Promise((resolve, reject) => {
  console.log('BEGIN make from')
  resolve('Hello')
  console.log('DONE make from')
}))
console.log('AFTER make from')

console.log('BEFORE make defer')
const deferObs = defer(() => new Promise((resolve, reject) => {
  console.log('BEGIN make defer')
  resolve('World')
  console.log('DONE make defer')
}))
console.log('AFTER make defer')

console.log('BEFORE subscrive from')
fromObs.subscribe(
  v => console.log('from', v),
  e => console.log(e),
  () => console.log('from complated')
)
console.log('AFTER subscrive from')

console.log('BEFORE subscrive defer')
deferObs.subscribe(
  v => console.log('defer', v),
  e => console.log(e),
  () => console.log('defer complated')
)
console.log('AFTER subscrive defer')