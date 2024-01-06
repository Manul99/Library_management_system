const mongoose = require('mongoose');
const genderEnum = ['male','female'];

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    gender:{type:String, enum:genderEnum,required:true},
    birthday:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    mobile:{type:String, required:true},
    nic:{type:String, required:true,unique:true},
    username:{type:String, required:true,unique:true},
    password:{type:String , required:true},
})

const Users = mongoose.model('users',userSchema);

module.exports = Users;