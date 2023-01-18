const User = require("../Models/User");



const Login = async function(req,res){
    
    const CheckUsername = await User.findOne({Username : req.body.Username, Password : req.body.Password})
    if(CheckUsername){
        res.status(200).json({
            success : true,
            Username : req.body.Username
        })
    }
    else{
        res.status(400).json({
            success : false,
            Message : "User can't find"
        })
    }
}


const Register = async function(req,res){
    
    const CheckUser =await User.findOne({Username : req.body.Username})
    if(!CheckUser){// user is not defined
        const newUser = new User(req.body)
        await newUser.save()
        .then(() => {
            return res.status(201).json(newUser)
        })
        .catch((err)=>{
            return res.status(400).json({
                success : false,
                message : "Register is failed...",
                error   : err.message
            })
        })
    }
    else{
        res.status(400).json({
            success : false,
            message : "Register is failed because User is defined before",

        })
    }
    
}



module.exports = {
    Login,
    Register,
    

}