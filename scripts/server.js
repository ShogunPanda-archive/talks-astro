'use strict'

const fastifyStatic = require('@fastify/static')
const fastify = require('fastify')
const path = require('path')

const server = fastify({
  logger: {
    transport: { target: 'pino-pretty' }
  }
})

server.register(fastifyStatic, {
  root: path.join(process.cwd(), 'dist', process.argv[2])
})

server.setNotFoundHandler(function (_, reply) {
  reply.sendFile('index.html')
})

server.listen({ host: '0.0.0.0', port: parseInt(process.argv[3], 10) || 4200 }, err => {
  if (err) {
    throw err
  }
})

process.on('SIGINT', () => server.close())
