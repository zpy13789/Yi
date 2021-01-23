let mongoose = require('mongoose')

//Schema
let Schema = mongoose.Schema

let userSchema = new Schema({
    userName: String,
    password: String,
    passwords: String,

})
//Model
let User = mongoose.model('users',userSchema)

module.exports = User