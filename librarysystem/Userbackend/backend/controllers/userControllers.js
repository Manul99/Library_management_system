const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Users = require('../Models/User');

const register = asyncHandler(async(req,res) =>{
    const{name,gender,birthday,email,mobile,nic,username,password} = req.body;

    try {
        // Check all the fields are complete
        if(!name || !gender || !birthday || !email || !mobile || !nic || !username || !password){
            res.status(400)
            throw new Error('Please enter all fields');
        }

        const userExists = await Users.findOne({email});

        if(userExists){
            res.status(400);
            throw new Error('This user is already exists');
        }

        // Check if the phone number is valid or not
        const validMobileNumber = /^\+[1-9]\d{1,14}$/.test(mobile);
        if(!validMobileNumber){
            return res.status(400).json({message:'Invalid mobile number'});
        }

        //Hash the password
        const hashPassword = await bcrypt.hash(password,10);

        const user = new Users({
            name,
            gender,
            birthday,
            email,
            mobile,
            nic,
            username,
            password: hashPassword,

            
        })

        await user.save();
        res.status(201).json({message:'User registered succefully'});
    } catch (error) {
        console.error('Error during register:',error);
        res.status(500).json({message:'Failed to register user'});
    }
})

const login = asyncHandler(async(req,res) =>{
    const {username,password} = req.body;
    const JWT_SECRECT = 'manuss'

    try {
        const user = await Users.findOne({username})

        if(!user){
            res.status(404).json({message:'User not found'})
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:'Invalid passowrd'})
        }

        const token = jwt.sign({id:user.userID},JWT_SECRECT,{expiresIn:'1h'});
        res.status(200).json({token});
    } catch (error) {
        console.error('Error during login:',error)
        res.status(500).json({message:'Failed to login'})
    }
})

// Update member
const updateUser = asyncHandler(async(req,res) =>{
    const nic = req.params.nic;
    const {name,gender,birthday,email,mobile} = req.body;

   try {
    const updateUser = await Users.findOneAndUpdate({nic},{name,gender,birthday,email,mobile},{new:true});

        if(!updateUser){
            return res.status(404).json({error:"User not found"});
        }

        res.status(200).json(updateUser);
   } catch (error) {
     console.error('Failed to update user data:',error);
     res.status(500).json({error:'Failed to update users data'});
   }
});

// Delete user
const deleteUser = asyncHandler(async(req,res) => {
    const nic = req.params.nic;

    try {
        const deleteUser = await Users.findOneAndDelete({nic});
        if(!deleteUser){
            res.status(404).json({error:'Can not find this user'});
        }

        res.status(200).json({message:'User data deleted successfully'});
    } catch (error) {
        console.log('Failed to delete users data',error);
        res.status(500).json({error:'Failed to delete users data'});
    }
})

const getUser = asyncHandler(async(req,res) =>{
    try {
        const getUsers = await Users.find();
        res.status(200).json(getUser);
    } catch (error) {
        console.log('Failed to fetch the data');
        res.status(500).json({error:'Failed to fetch data'});
    }
})
module.exports = {register,login,updateUser,deleteUser,getUser}