const mongoose = require('../database')


const ParticipantsSchema = new mongoose.Schema({
    participant:{
        id: String,
        votes: Number,
    }
})

const Participant = mongoose.model('Participant', ParticipantsSchema)

module.exports = Participant