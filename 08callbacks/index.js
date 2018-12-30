const {Observable} = require('rxjs')

const observableCreated$ = Observable.create(function(observer){
  try {
    observer.next(1)
    observer.next(2)
    throw('throw err test')
  } catch (error) {
    observer.error(error)
  } finally {
    observer.complete()
  }
})

observableCreated$.subscribe(
  function next(item) {console.log(item)},
  function error(err) {console.log(err)},
  function complete() {console.log('complete')}
)