import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },


});


export const Admin = mongoose.model('Admin', adminSchema);

