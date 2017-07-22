'use-strict';

const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

exports.titles = Joi.object().keys({
  title: Joi.string().required().description('The search title')
});
