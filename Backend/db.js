import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Team-Access:5.Lc%3AhTK67zQh.j@unarrow-users-emails.qov4tu3.mongodb.net/').then(() => {
    console.log('MongoDB connected')
})
.catch((err) => {
    console.log('MongoDB connection error:',err)
})
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

export default SiteForgeInputModel;