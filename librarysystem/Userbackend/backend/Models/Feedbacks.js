const mongoose = require('mongoose');
const yesnoEnum = ['yes','no']
const feedbackSchema = new mongoose.Schema({
    reaction:{type:String,required:true},
    message:{type:String,required:true},
    yesno:{type:String,enum:yesnoEnum,required:true},
})

const Feedback = mongoose.model('feedbacks',feedbackSchema);

module.exports = Feedback;