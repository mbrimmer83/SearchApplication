'use strict';

const logger = require('../logconfig/logger');
const Promise = require('bluebird');

exports.findTitle = (db, title) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection('Titles');
    collection.find({"TitleName": {$regex: buildRegex(title)}}).toArray((err, docs) => {
      if (err) {
        logger.log('error', err.message);
        return reject(err);
      }
      else {
        return resolve(docs);
      }
    });
  });
};


let buildRegex = (title) => {
  let flags = 'i';
  return new RegExp('^' + title, flags)
}
