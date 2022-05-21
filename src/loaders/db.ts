import mongoose from "mongoose";
import config from "../config";
import user from "../models/user"

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set('autoCreate', true);

        console.log("Mongoose Connected ...");

        user.createCollection().then(function(collection){
            console.log("user collection is created!");
            
        })
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
