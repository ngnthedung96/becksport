const mongoose = require('mongoose');

function connect(){
    try{
        
        mongoose.createConnection('mongodb://localhost:27017/f8_education_dev');
        console.log('Connected to MongoDB');
    }
    catch(e){
        console.log('Connect failed');
    }
}

module.exports = { connect };