const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('users resource')
})

//Endpoint for retrieving all users 
router.get('/all', (req, res) => {
    //
})

//Endpoint for creating a new user
router.post('/new', (req, res) => {
    //
})

module.exports = router