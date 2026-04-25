 
 import {User} from "../models/user-models.js"

 const registerUser = async (req,res)=>{
    try{
        const {username,email,password} = req.body;
        //   basic validation

        if(!username || !email || !password){
            return res.status(400).json({message: "all fields are important"});

        }
        // check is user exist allready

        const existing = await User.findOne({email:email.toLowerCase(),});
        if(exising){
            return res.status(400).json({message:"User allready exist"})
        }
    } catch(error){

    }
 }