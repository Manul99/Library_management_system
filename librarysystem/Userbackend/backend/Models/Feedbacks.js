const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    reaction:{type:String,required:true},
    message:{type:String,required:true},
   
})

const Feedback = mongoose.model('feedbacks',feedbackSchema);

module.exports = Feedback;