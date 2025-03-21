/*if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}*/
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://nayanjyoti2012:nayanatroot@ogcluster.lu2x9.mongodb.net/?retryWrites=true&w=majority&appName=OGCluster", {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log("\nConnected to Atlas Database!"))

app.listen(process.env.PORT || 3000)

app.use('/', indexRouter)

