const {from} = require('rxjs')

from(new Promise((resolve,reject) => {
  setTimeout(() => resolve('promise next'), 1000)
})).subscribe(
  console.log,
  console.error,
  () => console.log('complete')
)
from(new Promise((resolve,reject) => {
  setTimeout(() => reject('promise err'), 1100)
})).subscribe(
  console.log,
  console.error,
  () => console.log('complete')
)