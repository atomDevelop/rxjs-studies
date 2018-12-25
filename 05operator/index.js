const {interval}=require('rxjs')
const {filter}=require('rxjs/operators')

let divisor = 2

setInterval(function(){
  console.log('divisor changed: ',divisor)
  divisor = (divisor + 1) % 10
},500)

interval(1000).pipe(
  filter(function(value) {
    return value % divisor == 0
  })
).subscribe(value => console.log(divisor,value))