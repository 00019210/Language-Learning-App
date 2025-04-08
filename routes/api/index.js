const express = require('express')
const flashcard_router = require('./flashcard')

const router = express.Router()

// registering child routers
router.use('/flashcard', flashcard_router)
module.exports = router
