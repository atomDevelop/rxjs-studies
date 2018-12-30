const {from, asapScheduler} = require('rxjs')

function* forLoopGen(start,end,increment){
  for(let x=start; x <= end; x+=increment){
    yield x
  }
}

console.log('BEFORE')
from(forLoopGen(1,15,2), asapScheduler).subscribe(
  x => console.log(`next: ${x}`),
  null,
  () => console.log('complete')
)
console.log('AFTER')