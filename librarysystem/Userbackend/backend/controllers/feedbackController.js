const asyncHandler = require('express-async-handler');
const Feedback = require('../Models/Feedbacks');

const sendFeedback = asyncHandler(async(req,res) =>{
    const {reaction,message} = req.body;

    try {
        if(!reaction || !message){
            res.status(400);
            throw new Error('Please enter all fields');
        }

        else{
            const newFeedback = new Feedback({
                reaction,
                message,
                
            });
            await newFeedback.save();
            res.status(201).json({message:'Feedback sent successfully'});
        }
    } catch (error) {
        console.log('Failed to send feedback data',error);
        res.status(500).json({error:'Failed to send feedback data'});
    }
})

const deleteFeedback = asyncHandler(async(req,res) =>{
  const id = req.params.id;

  try {
    const deletefeedback = await Feedback.findByIdAndDelete({id});
    res.status(200).json(deletefeedback);
  } catch (error) {
     console.log('Failed to feeback data',error);
     res.status(500).json({error:'Failed to delete feeback data'});
  }
})

const getFeedback = asyncHandler(async(req,res) =>{
    try {
        const getFeedback = await Feedback.find();
        res.status(200).json(getFeedback);
    } catch (error) {
        console.log('Failed to fetch data');
        res.status(500).json({error:'Failed to fetch the data'});
    }
})
module.exports = {sendFeedback,deleteFeedback,getFeedback};