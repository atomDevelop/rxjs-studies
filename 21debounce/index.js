const {fromEvent, interval} = require('rxjs')
const {debounce, debounceTime, take, tap} = require('rxjs/operators')
const sourceInterval = 400
interval(sourceInterval).pipe(
  take(4),
  debounce(srcVal => interval(
    srcVal%2==0?sourceInterval*1.2:sourceInterval*0.8
  ).pipe(
    tap(innerVal => {
      console.log('srcVal', srcVal)
      console.log('innerVal', innerVal)
    })
  ))
).subscribe(console.log,console.error)