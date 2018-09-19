const express = require('express')

module.exports = function(server) {
  //APi Routes
  const router = express.Router()
  server.use('/api', router)

  // router.get('/teste', function (req, res) {
  //   res.send('hello world')
  // })
  //
  const raffleService = require('../api/service')
  raffleService.register(router, '/teste')
}
