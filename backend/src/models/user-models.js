import mongoose,  {Schema } from "mongoose"

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique: true,
        lowercase:true,
        trim:true, 
        minLength:1,
        maxLength:30,
        
    },
    password:{
        type: String,
        require:true,
        minLength:3,
        maxLength:30
    },
    email:{
        types:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
    }
    
},{
    timestamps:true

});
export const User = mongoose.model("User",userSchema);