const {range} = require('rxjs')
const {filter, map} = require('rxjs/operators')
const divisor = 2
range(1,10).pipe(
  filter(function(value){
    return value % divisor == 0
  }),
  map(function(value){
    return value +1
  })
).subscribe(value => console.log(value))