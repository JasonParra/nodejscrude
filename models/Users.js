const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName:String,
    password:String,
    name:String,
    lastName:String,
    age:Number,
    birth: String,

})

module.exports = mongoose.model('Users',UserSchema)