const express = require('express');
const Users = require('../models/Users')

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        const users = await Users.find()
        res.json(users)
    }catch(err){
        res.json({message: err})
    }
})

router.post('/', async (req,res)=>{
    const createdUser = new Users({
        userName: req.body.userName,
        password: req.body.password,
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age
    })
    try{
        const resPost = await createdUser.save()
        res.json(resPost)
    }catch(err){
        res.json({message: error})
    }    
})

router.get('/:userId',async (req, res)=>{
    try{
        const user = await Users.findById(req.params.userId)
        res.json(user)
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:userId',async (req, res)=>{
    try{
        const deletedUser = await Users.deleteOne({_id: req.params.userId})
        res.json(deletedUser)
    }catch(err){
        res.json({message: err})
    }
})

router.patch('/:userId',async (req, res)=>{
    try{
        const userUpdated = await Users.updateOne({_id: req.params.userId},
        {
            $set:{
                userName: req.body.userName,
                password: req.body.password,
                name: req.body.name,
                lastName: req.body.lastName,
                age: res.body.age,                
            }
        })
        res.json(userUpdated)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router