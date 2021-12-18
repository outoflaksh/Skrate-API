const mongoose = require('mongoose')

const MeetingSchema = new mongoose.Schema({
    userId1 : {
        type: String,
        required: true,
    },
    userId2 : {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    meetingId : {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model('Meeting', MeetingSchema)