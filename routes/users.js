const express = require('express')
const router = express.Router()
const User = require('../models/User')
const uuid = require('uuid')

router.get('/', (req, res) => {
    res.send('users resource')
})

//Endpoint for retrieving all users 
router.get('/all', async (req, res) => {
    const users = await User.find({}, {_id : 0, __v : 0}) //get list of all users

    return res.json(users)
})

//Endpoint for creating a new user
router.post('/new', async (req, res) => {
    //check for correct format of request
    if (req.body.username == undefined) {
        return res.json({msg: 'Please provide the username value in the request!', uid: null})
    }

    const newUid = uuid.v4();

    let newUser = new User({
      username: req.body.username,  
      userId: newUid,
    })

    try {
        newUser = await newUser.save()
    } catch (e) {
        console.log(e);
    }

    return res.json({msg: 'New user created successfully!', uid: newUser.userId})
})

module.exports = router