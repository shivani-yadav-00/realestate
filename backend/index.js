import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import  cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config()   /* configuration of dotenv */

/*  intialisation of application */
const app = express();
const PORT = process.env.PORT || 3000;   //port specification
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});


//creating route for user and recidencies
app.use('/api/user',userRoute) //user registration router 
app.use("/api/residency",residencyRoute) //property router 
