import mongoose from "mongoose";
import config from "./env.config";

const coonectToDB = () => {
    mongoose.connect(config.MONGODB_URI)
    .then((conn) => {
            console.log(`Connected DB: ${conn.connection.host}`) 
    })      
    .catch((error) => {
            console.log(error.message);
            process.exit(1)
        })
    }

export default coonectToDB    


    