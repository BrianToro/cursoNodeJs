const { exec, spawn } = require('child_process')
// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if(err){
//         console.error(err)
//         return false;
//     } else {
//         console.log(stdout)
//     }
// } )

let proceso = spawn('ls', ['-la'])

proceso.stdout.on('data', (dato) => {
    console.log(dato.toString())
})

proceso.on('exit', () => {
    console.log('Murio el proceso')
})