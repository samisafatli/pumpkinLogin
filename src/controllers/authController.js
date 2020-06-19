const express = require('express')
const ParticipantsSchema = require('../models/User')

const router = express.Router()

router.post('/vote', async(req,res) => {
    try{
        
        const participant = await ParticipantsSchema.create(req.body)
        
        return res.send({ participant })

    } catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/auth',router)