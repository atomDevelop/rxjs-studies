const {range, interval} = require('rxjs')
const {filter, last, first} = require('rxjs/operators')

interval(1).pipe(
  filter(a=>a%2===0),
  first(a=>a%3===0)
).subscribe(
  a=>console.log('filter, first', a),
  e=>console.log('filter, first', e),
  ()=>console.log('filter,first complete')
)

range(0,10).pipe(
  last(a=>a%4===0)
).subscribe(
  a=>console.log('last', a),
  e=>console.log('last', e),
  ()=>console.log('last complete')
)