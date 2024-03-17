const User = require("../models/user.models.js");

// registering user
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

// logining user
exports.loginUser = async (req,res) => {
    try {
        const { email,password } = req.body;

        if(!email || !password) {
            res.status(401).json({success:false,message:"Email or Password is incorrect"});
        }
        // this select is written because in the schema the password field select is made false so that does
        // not get fetched so to fetch it explicitly we have used it 
        const loggedUser = await User.findOne({email}).select('+password'); 
        if(!loggedUser) {
            return res.status(402).json({success : false, message: "User not registered or password is incorrect"});
        }
        if(password !== loggedUser.password) {
            return res.status(404).json({success:false,message:"Incorrect password"});
        }
        res.status(200).json({
            success:true,
            message:"user logged in successfully",
            user:{
                name:loggedUser.name,
                email:loggedUser.email,
                address:loggedUser.address,
                contact: loggedUser.contact
            }
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
}