const mongoose = require('mongoose');

const roomereservationSchema = new mongoose.Schema({
    category:{type:String, required:true},
    capacity:{type:String, required:true},
    zone:{type:String, required:true},
    fromDate:{type:String,required:true},
    nic:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    fromTime:{type:String, required:true},
    until:{type:String, required:true},
    

});

const Roomreservation = mongoose.model('roomrservation',roomereservationSchema);

module.exports = Roomreservation;