import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoose connected:${conn.connection.host}`);

    } catch (error) {
        console.log(`Error occured:${error.message}`);
        process.exit(1);
        //If process fail then 1 and if process get success then 0  
    }
}