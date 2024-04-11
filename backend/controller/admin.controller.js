import { admin } from "../models/admin.models.js";

export const addAdmin = async (req,res) => {
    try {
        const {adminName,adminId,password,address} = req.body;

        if(!adminName || !adminId ||!password){
            return res.status(400).json({success: false, message: "Fill all the required fields"});
        }

        let Admin = await admin.findOne({adminName,adminId});
        if(Admin){
            return res.status(404).json({success: false, message: "Admin already exist"});
        }

        Admin = await admin.create({
            adminName,
            adminId,
            password,
            address
        });

        res.status(200).json({
            success: true,
            message: "Ok admin registered successfully",
            Admin
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//logging in the admin
export const authAdmin = async (req,res) => {
    try {
        const {adminId, password} = req.body;
        if(!adminId || !password){
            return res.status(402).json({success: false,message:"Fill the required fields"});
        }
        const loggedAdmin = await admin.findOne({adminId}).select("+password");
        if(!loggedAdmin){
            return res.status(404).json({success:false,message:"Admin not registered"});
        }
        if(password !== loggedAdmin.password){
            return res.status(404).json({success: false, message:"Incorrect password"});
        }

        res.status(200).json({
            success:true,
            message: "Admin logged in successfully",
            Admin: {
                name: loggedAdmin.name,
                id: loggedAdmin.adminId,
                address: loggedAdmin.address
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}