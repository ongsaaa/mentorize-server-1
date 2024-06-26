import mongoose from "mongoose";

export const StudentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    learning_pref: {
        type: [String],
        required: true
    },
    subject: {
        type: [String], // Define subject as an array of strings
        required: true
    },
    education: {
        type: [String],
    },
    price_course: {
        type: Number,
    },
    price_hour: {
        type: Number,
    },
    line: {
        type: String,
        required: true
    },
    discord: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: { type: String },
    profile: { type: String }
});

export default mongoose.model.Student || mongoose.model('Student', StudentSchema);