const os = require('os')
console.log(os.cpus().length)


const SIZE = 1024
function kb(b){ return b/SIZE }
function mb(b){ return kb(b)/SIZE }
function gb(b){ return mb(b)/SIZE }
console.log(gb(os.freemem()))

console.log(os.totalmem())

console.log(os.homedir())