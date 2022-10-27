import { createServer } from 'node:http'

const server = createServer()
server.timeout = 120000
server.requestTimeout = 300000
server.headersTimeout = 60000
