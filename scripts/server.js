'use strict'

const fastifyStatic = require('@fastify/static')
const fastify = require('fastify')
const path = require('path')

const server = fastify({ logger: true })

server.register(fastifyStatic, {
  root: path.join(process.cwd(), 'dist', process.argv[2])
})

server.setNotFoundHandler(function (_, reply) {
  reply.sendFile('index.html')
})

server.listen({ port: parseInt(process.argv[3], 10) }, err => {
  if (err) {
    throw err
  }

  server.log.info(`Listening on port ${server.server.address().port}...`)
})

process.on('SIGINT', () => server.close())
