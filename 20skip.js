const {interval} = require('rxjs')
const {skip, skipUntil, skipWhile, take, takeUntil} = require('rxjs/operators')

interval(300).pipe(
  skip(3),
  take(7)
).subscribe(
  c=>console.log('skip',c),
  console.error,
  ()=>{console.log('skip complete')}
)

interval(400).pipe(
  skipUntil(interval(1200)),
  takeUntil(interval(2400))
).subscribe(
  c=>console.log('skipUntil',c),
  console.error,
  ()=>{console.log('skipUntil complete')} 
)

interval(500).pipe(
  skipWhile(x=> x < 6),
  take(3)
).subscribe(
  c=>console.log('skipWhile',c),
  console.error,
  ()=>{console.log('skipWhile complete')} 
)