let nombre = process.env.NOMBRE || 'Pedrito'
let web = process.env.WEB || 'No existe nombre web'

console.log(`Hola ${nombre}`)
console.log(`Tu web es ${web}`)