const hola = async function (nombre = 'No  hay nombre'){
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 1000)
    })
}

const adios = async function(nombre){
    return  new  Promise((resolve, reject) =>  {
        setTimeout(() =>  {
            console.log( `Adios  ${nombre}` )
            resolve(nombre)
        }, 1000)
    })
}


async function llamada(){
    const nombre = await hola('Carlos')
    await adios(nombre)
    console.log('Terminamos proceso')
}

console.log('Empezamos proceso')
llamada()
