const {empty, never, throwError} = require('rxjs')

const subscriber = prefix => [
  v=> console.log(prefix,'success',v),
  e=> console.log(prefix,'error',e),
  c=> console.log(prefix,'completed')
]

empty().subscribe(...subscriber('empty'))
never().subscribe(...subscriber('never'))
throwError().subscribe(...subscriber('throw'))