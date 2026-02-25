import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected: ${conn.connection.name},${conn.connection.host}`)
    }
    catch (err) {
        console.log("Database not connected", err);
        process.exit(1)
    }
}