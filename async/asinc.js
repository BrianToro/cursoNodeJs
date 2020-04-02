const hola = function (nombre = 'No  hay nombre'){
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
            reject('Hubo un error')
        }, 1000)
    })
}

const adios = function(nombre){
    return  new  Promise((resolve, reject) =>  {
        setTimeout(() =>  {
            console.log( `Adios  ${nombre}` )
            resolve(nombre)
            reject('Hubo un error')
        }, 1000)
    })
}

console.log('Iniciando  proceso...')
hola('Pedrito')
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso')
    })
    .catch(err => console.error(err))