'use-strict';

// Load modules
const logger = require('../logconfig/logger');
const find = require('../dbconfig/findTitles').findTitle;

const MongoClient = require('mongodb').MongoClient;

let url = process.env.URL;

let database;

MongoClient.connect(url, (err, db) => {
  if (err) {
    logger.log('error', err.message);
  } else {
    database = db;
    logger.log('info', 'Connection to database established!');
  }
});


module.exports = (req, reply) => {
  find(database, req.query.title)
  .then((docs) => {
    logger.log('info', docs);
    return reply(docs);
  })
  .catch((err) => {
    return reply(err);
  });
}
