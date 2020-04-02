const bcript = require('bcrypt')

const pass = '1234segura!'

bcript.hash(pass, 5, function(err, hash){
    console.log(hash)
    bcript.compare(pass, hash, function(err, res){
        console.log(res)
    })
})

