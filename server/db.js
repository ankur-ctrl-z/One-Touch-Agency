const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('DATABASE CONNECTED');
    } catch (error) {
        console.error('DATABASE NOT CONNECTED', error);
        process.exit(1);
    }
};

const InputSchema = new mongoose.Schema({
    // NAME
    name:{
        type: String,
        required: true,
        trim: true
    },

    // EMAIL
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    // MESSAGE
    message: {
        type: String,
        required: true,
        trim: true
    },

    // CREATED AT
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const InputModelOneTouch = mongoose.model('InputModelOneTouch', InputSchema);

module.exports = { connectDB, InputModelOneTouch };


