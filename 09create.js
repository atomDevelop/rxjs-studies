const {Observable} = require('rxjs')

const observable0to9$ = Observable.create(obs => {
  console.log('BEGIN')
  for (let i=0; i<10; i++) {
    obs.next(i)
  }
  obs.complete()
  obs.next(11)
  obs.error(new Error('error'))
  console.log('END')
  return () => {
    console.log('UNSUBSCRIBE')
  }
})

observable0to9$.subscribe(
  value => console.log(`next: ${value}`),
  err => console.error(`err ${err.message}`),
  () => console.log('DONE')
)