const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/inventory", ()=>{
    console.log('connected to DB')
})