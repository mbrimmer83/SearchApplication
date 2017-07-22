'use strict';

// Load ENV vars
require('dotenv').config();

// Main modules
const Hapi = require('hapi'),
      HapiSwagger = require('hapi-swagger'),
      Inert = require('inert'),
      Vision = require('vision'),
      Status = require('hapijs-status-monitor'),
      logger = require('./configs/logconfig/logger');

// configs
const routes = require('./configs/routes');

const server = new Hapi.Server();

// Say what port to default to if none given
server.connection({
  'port': process.env.PORT,
  'host': '0.0.0.0'
});

// Swagger configuration options
let swaggerOptions = {
  'basePath': '/',
  'pathPrefixSize': 2,
  'info': {
    'title': 'Turner code challenge swagger documentation',
    'description': 'Turner Code Challenge for Hapi Api',
    'version': '1.0',
    'license': {
      'name': 'MIT'
    }
  },
  'tags': []
};

// Hapi Status configuration options
let statusOptions = {
  'title': 'turnerchallange',
  'routeConfig': {
    'isInternal': false,
    'auth': false
  }
};

// Register hapi plugins. Give options if wanted
server.register([Vision, Inert, {
  'register': HapiSwagger,
  'options': swaggerOptions
},
{
  'register': Status,
  'options': statusOptions
}], (err) => {
  if (err) {
    throw err
    logger.error(`The server failed to register: ${err}`);
  }

  // Give server object access to routes
  server.route(routes);

  // For orcale so that we can kill or stop server
  process
  .on('SIGTERM', function() {
    console.log("\nTerminating");
    process.exit(0);
  })
  .on('SIGINT', function() {
    console.log("\nTerminating");
    process.exit(0);
  });

  server.start(() => {
    logger.info(`Server running on: ${server.info.uri}`);
  });
});
