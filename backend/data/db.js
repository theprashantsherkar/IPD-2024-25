import mongoose from "mongoose";

export async function connectDB() {

    mongoose.connect(process.env.MONGO_URL, { dbName: "IPD-2024" })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => console.log(err));
}

