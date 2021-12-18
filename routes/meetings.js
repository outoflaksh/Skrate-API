const express = require('express')
const router = express.Router()
const Meeting = require('../models/Meeting')
const uuid = require('uuid')

//Endpoint for retrieving all meetings 
router.get('/all', async (req, res) => {
    var meetings = await Meeting.find({}, {_id:0, __v:0})

    return res.json(meetings)
})

//Endpoint to get one meeting details by ID
router.get('/:mid', async (req, res) => {
    const meeting = await Meeting.findOne({userId: req.params.mid}, {_id : 0, __v : 0})

    if (!meeting) {
        return res.status(404).json({msg: 'Meeting not found'})
    }

    return res.json(meeting)
})

//Endpoint for creating a new meeting
router.post('/new', async (req, res) => {
    if (!(req.body.uid1 && req.body.uid2 && req.body.date)) {
        return res.json({msg: 'Please fill the required details in the request!', meetingid: null})
    }

    const mid = uuid.v4();

    let newMeeting = new Meeting({
        userId1: req.body.uid1,
        userId2: req.body.uid2,
        meetingId: mid,
        date: req.body.date,
    })

    try {
        newMeeting = await newMeeting.save()
    } catch (e) {
        return res.json({msg: 'Meeting creation unsuccessful! Please ensure the users exist and are unique!', meetingid: null})
    }

    return res.status(201).json({msg: 'New meeting created successfully!', meetingid: newMeeting.meetingId})
})

module.exports = router