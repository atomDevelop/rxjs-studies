const {interval} = require('rxjs')
const {take,debounce,tap,debounceTime} = require('rxjs/operators')
const sourceInterval = 1000

interval(sourceInterval).pipe(
  take(6),
  tap(console.log),
  debounce(src => interval(
    src%2 == 0?sourceInterval*1.2:sourceInterval*0.8
  ).pipe(
    tap(innerVal => console.log(src,innerVal))
  ))
).subscribe(x=>console.log(`result ${x}`))

interval(400).pipe(
  take(4),
  debounceTime(300)
).subscribe(x=>console.log(`- ${x}`))

interval(400).pipe(
  take(4),
  debounceTime(500)
).subscribe(x=>console.log(`-- ${x}`))