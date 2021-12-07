require('dotenv').config()
const { Router } = require('express')
const express = require('express')
const app= express()
const ELayouts = require ('express-ejs-layouts')
const methodOverride = require('method-override')
const session = require('express-session')

app.use(session({
    secret: 'KZMwyHb(ZjAK{9,4',
    resave: false,
    saveUninitialized: false,
}))

const isLogin = (req, res, next) => {
    if (req.url == '/productos' &&  !req.session.user_id) {
        res.redirect('/register')
    }
    next()
}

app.get('/', (req, res) => {
    res.render('index')
    })

app.set('view engine', 'ejs')
app.use(ELayouts)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

app.use('/', require('./routes/session'))
app.use('/', isLogin, require('./routes/router'))
app.use('/', require('./routes/Rcontactos') )

app.use((req, res, next) => {
    res.status(404).send('Not Found')
})
//const port = 5000
const port = process.env.PORT || 5000
app.listen (port, () => console.log(`http://localhost:${port}`))

