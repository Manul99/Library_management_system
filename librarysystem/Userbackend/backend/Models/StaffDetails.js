const mongoose = require('mongoose');
const genderEnum = ['male','female']
const staffSchema = new mongoose.Schema({
    staffname:{type:String, required:true},
    staffnic:{type:String,required:true},
    gender:{type:String, enum:genderEnum,required:true},
    birthday:{type:String,required:true},
    mobile:{type:String,required:true},
    email:{type:String,required:true},
    jobrole:{type:String,required:true},
});

const Staff = mongoose.model('staff',staffSchema);

module.exports = Staff;