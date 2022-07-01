const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://kiran:kiran26@cluster0.7hbp2.mongodb.net/product?retryWrites=true&w=majority", 
    ()=>{console.log('connected to DB')});