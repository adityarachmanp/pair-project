function autentikasi(req,res,next){

    if (req.session.custId){
        console.log('===========LogIn===========')
        console.log(req.session.custId)
        console.log(req.session.name)
        next()
    }
    else {
        let logout = 'LogIn Dulu'
        console.log('=========Midleware=========')
        let name = null
        console.log(logout)
        res.render('prodList', {prod:null,logout : logout,name})
    }

}


module.exports = autentikasi