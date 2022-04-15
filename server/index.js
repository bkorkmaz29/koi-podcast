import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import podRoute from './routes/podcast.js';

dotenv.config();


mongoose.connect(process.env.DB_CONNECT ,
{ useNewUrlParser: true},
() => console.log('connected to db') )

const app = express();
const PORT = 5000;



app.use(cors()) 
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/user', authRoute);
app.use('/api/podcast', podRoute);



app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

