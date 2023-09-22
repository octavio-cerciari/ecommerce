const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//var mongoose = require('mongoose')
app.use(express.static("ecommerce"))

//mongoose.connect("mongodb://localhost:27017")
app.use(express.json())

app.get('**', (req, res) => {
    res.redirect('/')
})

app.listen(port, () => {
    console.log('Node server is running on ecommerce-app.up.railway.app')
})