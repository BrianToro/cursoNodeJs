const fs = require('fs')

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>  {
        console.log(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No se ha podido escribir')
        } else {
            console.log('Se ha escrito')
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, function(err){
        if(err){
            console.error('No  se ha podido eliminar el archivo')
        } else {
            console.log('El archivo se ha eliminado con exito')
        }
    })
}

//leer(__dirname + '/archivo.txt')
// escribir(__dirname + '/archivo1.txt', 'Esto es un contenido nuevo', console.log)
borrar(__dirname + '/archivo1.txt', console.log)