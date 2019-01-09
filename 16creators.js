const {range, interval, timer} = require('rxjs')

const subscriber = prefix => [
  x=> console.log(prefix, x),
  e=> console.log(e),
  c=> console.log(prefix, 'completed')
]

range(1,5).subscribe(...subscriber('range'))
interval(1000).subscribe(...subscriber('interval'))
timer(1000,300).subscribe(...subscriber('timer'))