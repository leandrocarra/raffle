const mongoose = require('mongoose')
const keys = require('./keys')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(keys.data)
