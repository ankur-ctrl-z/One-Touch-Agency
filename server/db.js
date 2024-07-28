const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Schema } = mongoose;

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
    name: {
        type: String,
        required: true,
        trim: true
    },

    // PHONE
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid phone number!`
        }
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



