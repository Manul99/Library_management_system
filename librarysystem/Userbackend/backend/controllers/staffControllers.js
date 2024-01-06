const asyncHandler = require('express-async-handler');
const Staff = require('../Models/StaffDetails');


const registerStaff = asyncHandler(async(req,res) =>{
    const{staffname,staffnic,gender,birthday,mobile,email,jobrole} = req.body;

   try {
    if(!staffname || !staffnic || !gender || !birthday || !mobile || !email || !jobrole){
        res.status(400);
        throw new Error('Please enter all fields');
    }

    const staffExists = await Staff.findOne({email});
    if(staffExists){
        res.status(400)
        throw new Error('This staff member is already exists');
        
    }

    // Check if the phone number is valid or not
    const validMobileNumber = /^\+[1-9]\d{1,14}$/.test(mobile);
    if(!validMobileNumber){
        return res.status(400).json({message:'Invalid mobile number'});
    }

    const newStaff = new Staff({
        staffname,
        staffnic,
        gender,
        birthday,
        mobile,
        email,
        jobrole
    });
    await newStaff.save();
    res.status(201).json({message:'Staff registered succefully!'});
   } catch (error) {
    console.log('Failed to insert data',error);
    res.status(500).json({error:'Failed to insert data'});
   }


})

// Update staff
const updateStaff = asyncHandler(async(req,res) =>{
    const staffnic= req.params.staffnic;
    const{staffname,gender,birthday,mobile,email,jobrole} = req.body;

    try {
    const updateStaff = await Staff.findOneAndUpdate({staffnic},{staffname,gender,birthday,mobile,email,jobrole},{new:true});

        if(!updateStaff){
            return res.status(404).json({error:'Staff can not find'});
        }

        res.status(200).json({message:'Staff data updated succefully'});
    } catch (error) {
        console.log('Failed to update data');
        res.status(500).json({error:'Failed to update data'});
    }

});

// Delete staff
const deleteStaff = asyncHandler(async(req,res) =>{
    const staffnic = req.params.staffnic;

    try {
        const deleteStaff = await Staff.findOneAndDelete({staffnic});
        if(!deleteStaff){
            res.status(404).json({error:'Staff can not find'});
        }

        res.status(200).json({message:'Staff data deleted sueccefully'});
    } catch (error) {
        console.log('Failed to delete data');
        res.status(500).json({error:'Failed to delete data'});
    }
})

// Retrieve data 
const getStaff = asyncHandler(async(req,res) =>{
    try {
        const getStaffs = await Staff.find();
        res.status(200).json(getStaff);
    } catch (error) {
        console.log('Failed to fetch the data');
        res.status(500).json({error:'Failed to fetch data'});
    }
})



module.exports = {registerStaff,updateStaff,deleteStaff,getStaff};