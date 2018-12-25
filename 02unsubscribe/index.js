const {Observable, interval} = require('rxjs')

console.log('works')
const observableCreated$ = Observable.create(function subscribe(observer) {
  console.log('created')
  const intervalID = setInterval(function () {
    observer.next('hi')
  }, 1000)
  return function unsubscribe(){
    clearInterval(intervalID)
  }
})
const subscription = observableCreated$.subscribe(
  function(value) {
    console.log(value)
  }
)

setTimeout(() => {
  subscription.unsubscribe()
}, 3000)

const intervalObservable = interval(1000)
const intervalSubscription = intervalObservable.subscribe(function (x) {
  console.log(x)
})


setTimeout(() => {
  intervalSubscription.unsubscribe()
}, 3000)