const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/participants', { useNewUrlParser: true, useCreateIndex: true })

mongoose.Promise = global.Promise

module.exports = mongoose