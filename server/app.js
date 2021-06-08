const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user-routes')

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        '*'
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});
app.use(bodyParser.json())


app.use(userRoutes)

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An Unknown error occured' })
})

mongoose.connect(`mongodb+srv://karthik:karthik@cluster0.10s8h.mongodb.net/socialmedia?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(process.env.PORT || 5000)
    }).catch((error) => {
        console.log(error)
    })