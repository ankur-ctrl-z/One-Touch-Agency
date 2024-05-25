import express from 'express';
import bodyParser from 'body-parser';
import SiteForgeInputModel from './db';
import cors from 'cors';
import zod from 'zod'

const PORT = 3000;

const inputsSchema = zod.object({
    email: zod.string().email(),
    message: zod.string(),
    services: zod.string()
})

// middleware for duplicate email 

async function checkDuplicateEmail (req,res,next) {
    const {email} = req.body;
    const existingEmail = await SiteForgeInputModel.findOne({email})

    if (existingEmail) {
        return res.status(400).json({
            error: 'Email already exists'
        });
    }
    next();

}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// defining routes

app.post('/save-email',checkDuplicateEmail, async function(req,res){
    const {email, message, services} = req.body;

    const validateData = inputsSchema.safeParse({email, message, services});

    if (!validateData.success) {
        return res.status(400).json({error: 'Invalid data'})
    }
       const newEntry = new SiteForgeInputModel(validateData.data)  
    
    try {
        await newEntry.save();
        res.status(200).json({
            message: 'Data saved successfully',
            data: newEntry
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

app.listen(PORT, function(req,res){
    console.log(`Server is running on http://localhost:${PORT}`)
})

