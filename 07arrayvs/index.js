const {Observable} = require('rxjs')
const {map,toArray} = require('rxjs/operators')

const observableCreated$ = Observable.create(function(observer) {
  console.log('Observable BEAGIN')
  const arr = [1,2]
  for (let i=0; i<arr.length; i++) {
    console.log(`current arr: arr[${i}]`)
    observer.next(arr[i])
  }
  console.log('BEFORE complate')
  observer.complete()
  console.log("'bservavle END")
})
function logAndGet(original, value) {
  console.log(`originmal: ${original}, map value: ${value}`)
  return value
}
observableCreated$.pipe(
  map(function(value){
    return logAndGet(value, value*2)
  }),
  map(function(value) {
    return logAndGet(value, value+1)
  }),
  map(function(value){
    return logAndGet(value, value*3)
  }),
  toArray()
).subscribe(function(arr) {
  console.log(arr)
})