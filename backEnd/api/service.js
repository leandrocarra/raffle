const Raffle = require('./raffle')

Raffle.methods(['get','post','put','delete'])
Raffle.updateOptions({new: true, runValidators: true})

module.exports = Raffle
