'use strict';

const logger = require('../logconfig/logger');
const Promise = require('bluebird');

exports.findTitle = (db, title) => {
  console.log(db);
  return new Promise((resolve, reject) => {
    let collection = db.collection('Titles');
    collection.find({"TitleName": title}).toArray((err, docs) => {
      console.log(err);
      console.log(docs);
      if (err) {
        logger.log('error', err.message);
        return reject(err);
      }
      else {
        console.log(docs);
        return resolve(docs);
      }
    });
  });
};
