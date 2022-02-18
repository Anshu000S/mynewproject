const User = require('../models/User')

const getAllUser = async (req,res)=>{
    const user = await User.find({})
    res.status(400).json({user})
}

const addUser = async (req,res)=>{
    const user = await User.create(req.body)
    res.status(400).json({user})
}

const DeleteUser = async (req,res)=>{
    const {id: userID} = req.params
    console.log(req.params)
    const user = await User.findOneAndDelete({_id: userID})
    if(!user){
        return res.status(404).json({message:`user is not found`})
    }
    res.status(200).json({user})
}

const findUser = async (req,res)=>{
    //console.log(req.body)
    const name = req.body.name
    const user = await User.findOne({name: name})
    res.status(200).json({user})
}

const UpdateUSer = async (req,res)=>{
    
}




module.exports = {
    getAllUser,
    addUser,
    DeleteUser,
    findUser
}


