const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('meetings resource')
})

//Endpoint for retrieving all meetings 
router.get('/all', (req, res) => {
    //
})

//Endpoint for creating a new meeting
router.post('/new', (req, res) => {
    //
})

module.exports = router