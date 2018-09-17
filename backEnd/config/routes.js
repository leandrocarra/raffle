const express = require('express')

module.exports = function(server) {
  //APi Routes
  const router = express.Router()
  server.use('/api', router)

  //TODO Routes
  const service = require('../api/service')
  service.register(router, '/')
}
