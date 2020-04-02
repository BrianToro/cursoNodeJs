process.on('exit', ()  => { console.log('adios') } )

process.on('uncaughtException', (error, origen)  => {console.error(error.message)})

funcionQueNoExiste()