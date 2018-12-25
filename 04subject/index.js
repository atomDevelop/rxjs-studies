const {Subject} = require('rxjs')

const subject = new Subject()

subject.subscribe({
  next: function(v){
    console.log('observerA' + v)
  }
})

subject.subscribe({
  next: function(v){
    console.log('observerB'+v)
  }
})

subject.next(1)
subject.next(2)