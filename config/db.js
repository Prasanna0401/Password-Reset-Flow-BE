const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI);
        console.log('Connected to the database, please enjoy using the database!');
    } catch (error) {
        console.error('database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;