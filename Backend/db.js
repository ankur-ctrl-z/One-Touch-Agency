import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Team-Access:5.Lc%3AhTK67zQh.j@unarrow-users-emails.qov4tu3.mongodb.net/');
        console.log('MongoDB connected')
    } catch (error) {
        console.log('MongoDB connection error:',error);
        process.exit(1);
    }
}
// Defining Schema
const userSchema = new mongoose.Schema({
    // EMAIL
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
   },
   createdAt: {
    type: Date,
    default: Date.now
   },

   //SERVICES
   service: {
    type: String,
    required: true,
   },

   //Message
   message: {
    type: String,
    required: true
   }
})

// Defining Model
const SiteForgeInputModel = mongoose.model(
    "SiteForgeInputModel" , userSchema
)

module.exports = {connectDB, SiteForgeInputModel};