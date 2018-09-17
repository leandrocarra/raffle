const restful = require('node-restful')
const mongoose = restful.mongoose

const raffleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
    type: String
  },
  chosed: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = restful.model('Raffle', raffleSchema)
