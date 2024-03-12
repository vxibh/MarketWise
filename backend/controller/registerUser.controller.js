const User = require("../models/user.models.js");

exports.createUser = async (req,res) => {
    try {
        const {name,email,password,address,contact} = req.body;

        if( !name || !email || !password){
            res.status(401).json({success: false,message:"please fill the required fields"});
        }

        let user = await User.findOne({name,email});
        if(user){
            res.status(401).json({success: false,message: "user already exist"});
        }

        // this is also a way of creating a new user 
        user = await new User({name,email,password,address,contact}).save();

        res.status(200).json({
            success: true,
            message: "ok",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: message.error
        })
    }
}