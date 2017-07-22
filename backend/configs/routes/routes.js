'use strict';

const Joi = require('joi');
const paramsValidation = require('../validation/validation');
const titleHandler = require('../handlers/titleHandler');

module.exports = [{
  method: 'GET',
  path: '/titles',
  config: {
    handler: titleHandler,
    notes: 'API notes go here',
    tags: ['api'],
    validate: {
      query: paramsValidation.titles
    }
  }
}];
