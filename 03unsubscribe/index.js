const {interval} = require('rxjs')
const observable1 = interval(400)
const observable2 = interval(300)

const subscrition = observable1.subscribe(function (x) {
  console.log('first' + x)
})

const childSubs = observable2.subscribe(function(x){
  console.log('second'+x)
})

subscrition.add(childSubs)

setTimeout(function(){
  subscrition.unsubscribe()
}, 1000)