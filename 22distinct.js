const {of,interval} = require('rxjs')
const {take,map,distinct,distinctUntilChanged} = require('rxjs/operators')

interval(200).pipe(
  take(25),
  map(x=>({original: x, value: x%5})),
  distinct(x=>x.value, interval(2100))
).subscribe(console.log)

of (
  {some: {a: 1, b: 7}},
  {some: {a: 1, b: 8}},
  {some: {a: 2, b: 9}},
  {some: {a: 2, b: 9}},
  {some: {a: 3, b: 8}},
  {some: {a: 3, b: 8}}
).pipe(distinctUntilChanged((a,b) => {
  a.a === b.a && a.b === b.b
},
  a=>a.some
)).subscribe(
  console.log
)