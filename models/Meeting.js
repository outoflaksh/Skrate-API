const mongoose = require('mongoose')

const MeetingSchema = new mongoose.Schema({
    userId1 : {
        type: String,
        required: true,
        unique: true,
    },
    userId2 : {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Meeting', MeetingSchema)