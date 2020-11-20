const express = require('express')
const app = express()
const port = 3000
// const port = process.env.PORT || 4000
const router = require('./routers/routes.js')
const session = require('express-session')
const { prototype } = require('chart.js')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))


app.use('/', router)


app.listen(port , () =>{
    console.log('sucses from port',port )
})