import mongoose from "mongoose";

const productOrderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,  // this is a way of referencing from other schema
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true,"email cannot be empty!!"],
        unique: true
    },
    password: {
        type: String,
        minlength: [6,"password must be of 6 character atleast"],
        select: false
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        minlength: [10,"contact no should be of 10 only"],
        required: true,
        unique: true
    },
    orderHistory: {
        type: [productOrderSchema]
    }
},{timestamps: true});

export default mongoose.model("User", userSchema);