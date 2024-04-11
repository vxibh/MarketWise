import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    status: {  // this is for giving options for preventing spelling mistakes by different users 
        type: String,
        enum: ["PENDING", "CANCELLED", "COMPLETED"],
        default: "PENDING"
    }
});

const adminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: [true,"Name is required for registering"],
        unique: true
    },
    adminId: {
        type: String,
        required: [true,"Id is required for registering"],
        unique: true
    },
    password: {
        type: String,
        minlength: [8,"password must be of 8 characters"],
        select: false
    },
    address: {
        type: String,
        required: true
    },
    orders: {
        type: [orderSchema]
    }
});

export const admin = mongoose.model("admin", adminSchema);