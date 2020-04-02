const http = require('http')

//servidor escuchando
http.createServer(router).listen(3000)

function router (req, res){
    console.log('Nueva peticion')
    console.log(req.url)
    switch(req.url){
        case '/Hola':
            res.write('Iniciando conversacion')
            res.end()
            break
        case '/':
            //escritura de respuesta al usuario
            res.write('Hola ya se usar HTTP de nodejs')
            res.end()
            break
    }

    //respuesta en los headers
    res.writeHead(201,{ 'Content-Type': 'text/plain'})
}
console.log('Escuchando HTTP en: 3000')