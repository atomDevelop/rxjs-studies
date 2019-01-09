const {interval, fromEvent} = require('rxjs')
const {filter, take, takeUntil, takeWhile, takeLast} = require('rxjs/operators')

interval(500).pipe(
  take(5)
).subscribe(
  v=>console.log('take5', v),
  e=>console.log('take5', e),
  ()=>console.log('take5 complete')
)

interval(500).pipe(
  takeUntil(fromEvent(document.getElementById('stop'), 'click'))
).subscribe(
  v=>console.log('takeUntil', v),
  e=>console.log('takeUntil', e),
  ()=>console.log('takeUntil complete')
)

interval(500).pipe(
  filter(x=> x >= 7 || x%2 === 0),
  takeWhile(x => x <= 10)
).subscribe(
  v=>console.log('takeWhile', v),
  e=>console.log('takeWhile', e),
  ()=>console.log('takeWhile complete')
)

interval(500).pipe(
  filter(x=> x >= 7 || x%2 === 0),
  takeWhile(x => x <= 9),
  takeLast(4)
).subscribe(
  v=>console.log('takeLast', v),
  e=>console.log('takeLast', e),
  ()=>console.log('takeLast complete')
)