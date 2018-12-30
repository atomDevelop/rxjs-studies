const {fromEvent} = require('rxjs')

const button = document.getElementById('button')
const result = document.getElementById('result')

console.log('ready')

const makeLogger = (el) => {
  console.log('loger ready')
  return (log) => {
    console.log(log)
    const p = document.createElement('p')
    p.appendChild(
      document.createTextNode(log)
    )
    el.appendChild(p)
  }
}

const logger = makeLogger(result)

fromEvent(button,'click').subscribe(
  event => {
    console.log(event.target.id)
    logger(`${event.target.id} is clicked.`)
  },
  err => {
    logger(`error: ${err.message}`)
  },
  () => {
    logger('complete')
  }
)