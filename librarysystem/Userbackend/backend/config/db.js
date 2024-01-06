const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const MONGO_URI = `mongodb+srv://librarysystem:publiclibrary@cluster0.vrzlo0r.mongodb.net/LibrarySystem`
        const con = await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected ${con.connection.host}`)
    } catch (error) {
        console.log(`Error:${error}`);
        process.exit();
    }
}

module.exports = connectDB;