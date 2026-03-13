import mongoose from "mongoose";

const conectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('====================================');
        console.log("Connected to MongoDB");
        console.log('====================================');
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
        
    }
}

export default conectToMongoDB