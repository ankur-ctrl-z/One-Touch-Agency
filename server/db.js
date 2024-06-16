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
    // EMAIL
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    // Services
    services: {
        type: String,
        required: true
    },

    // MESSAGE
    message: {
        type: String,
        required: true
    },

    // CREATED AT
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SubscriptionEmailSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true 
    },
    subscribedAt: {
      type: Date,
      default: Date.now
    }
  });


const InputModelOneTouch = mongoose.model('InputModelOneTouch', InputSchema);
const SubscriptionEmailModel = mongoose.model('SubscriptionEmailModel', SubscriptionEmailSchema);


module.exports = { connectDB, InputModelOneTouch, SubscriptionEmailModel };