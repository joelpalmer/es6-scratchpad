const R = require('ramda');

const user = {id: 1, name: 'foo'}

console.log(R.prop('id', user))
const updatedUser = R.assoc('id', 2, user)
console.log(updatedUser)
console.log(user)