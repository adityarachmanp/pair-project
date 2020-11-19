const bcrypt = require('bcryptjs')


function encryptPass(pass){
    return bcrypt.hashSync(pass,10)
}


function getPass(pass,hash){
    return bcrypt.compareSync(pass,hash)
}



module.exports = {encryptPass,getPass}