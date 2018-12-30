const {of,asapScheduler} = require('rxjs')
console.log('BEFORE call subscribe()')
of(1,2,'a','b',['x','y'],asapScheduler).subscribe(
  x=>console.log(`next ${x}`),
  e=>console.error(`error ${e}`),
  ()=>console.log('completed')
)
console.log('AFTER call subscribe()')