const asyncHandler = require('express-async-handler');
const Roomreservation = require('../Models/Roomreservation');
const nodemailer = require('nodemailer')

const reserveStudyRoom = asyncHandler(async(req,res) =>{
    const{category,capacity,zone,fromDate,nic,email,fromTime,until} = req.body;

    if(!category || !capacity || !zone || !fromDate || !nic || !email || !fromTime || !until){
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    const nicExists = await Roomreservation.findOne({nic});
    if(nicExists){
        res.status(400);
        throw new Error('You have already selected a room!');
    }

    else{
        try {
            const newRoomreservation = new Roomreservation({
                category,
                capacity,
                zone,
                fromDate,
                nic,
                email,
                fromTime,
                until,
            })
            await newRoomreservation.save();
            res.status(201).json(newRoomreservation);

            sendEmail(fromDate,email,fromTime,until);
        } catch (error) {
            console.log('Failed to insert data',error);
            res.status(500).json({error:'Failed to insert data'});
        }
    }
})

// Update reserveroom
const updatereserveStudyroom = asyncHandler(async(req,res) =>{
    const nic = req.params.nic;
    const{category,capacity,zone,fromDate,email,fromTime,until} = req.body;

    try {
        const updatereserveStudyroom = await Roomreservation.findOneAndUpdate({nic},{category,capacity,zone,fromDate,email,fromTime,until},{new:true});

        if(!updatereserveStudyroom){
            return res.status(404).json({error:'Room not found'});
        }
        res.status(200).json(updatereserveStudyroom);
    } catch (error) {
        console.log('Failed to update reserve room:',error);
        res.status(500).json({error:'Failed to update reserve room'});
    }
});

const deletereserveStudyroom = asyncHandler(async(req,res) =>{
    const nic = req.params.nic;

    try {
        const deletereserveStudyroom = await Roomreservation.findOneAndDelete({nic});
        if(!deletereserveStudyroom){
            res.status(404).json({error:'Can not find the room'});
        }

        res.status(200).json({message:'reserved room deleted succecfully'});
    } catch (error) {
        console.log('Failed to delete reserved room',error);
        res.status(500).json({error:'Failed to delete reserved room'});
    }
})

const getreserveStudyroom = asyncHandler(async(req,res) =>{
    try {
        const getStudyroom = await Roomreservation.find();
        res.json(getStudyroom);
    } catch (error) {
        console.log('Failed to fetch data',error);
        res.status(500).json({error:'Failed to fethc data'});
    }
})



const sendEmail = (fromDate,email,fromTime,until) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'manulperera5@gmail.com',
            pass:'m1a2n3u4l5',
        }
    });

    const mailOptions = {
        from: 'manulperera5@gmail.com',
        to:email,
        subject:'Reservation Confirmation',
        text:`Thank you for reserving a study room in Librariaa. 
        Date: ${fromDate}
        From Time: ${fromTime}
        Until Time: ${until}
 `,
    }

    transporter.sendMail(mailOptions,(error,info) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: '+ info.response);
        }
    })
}



module.exports = {reserveStudyRoom,updatereserveStudyroom,deletereserveStudyroom,getreserveStudyroom};