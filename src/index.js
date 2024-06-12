import dotenv from 'dotenv'

dotenv.config({})
import connectDB from "./db/index.js";
import { app } from './app.js';


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8001,()=>{
        console.log(`Serveris running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed!!"+err);
})
