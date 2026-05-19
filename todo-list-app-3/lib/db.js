import mongoose from "mongoose";

export async function connectDB() {
    try {
        if (mongoose.connection.readyState === 1) {
            return true;
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
        return true;
    } catch (error) {
        console.error("DB connection error:", error);
        return false;
    }
}