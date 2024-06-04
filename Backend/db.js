const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

const siteForgeInputSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    service: { type: String, required: true } // Ensure this field is defined
});

const SiteForgeInputModel = mongoose.model('SiteForgeInput', siteForgeInputSchema);

module.exports = { connectDB, SiteForgeInputModel };



