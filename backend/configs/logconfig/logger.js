'use strict';

const Winston = require('winston'),
      moment = require('moment');

let customColors = {
  debug: 'blue',
  info: 'green',
  warn: 'yellow',
  error: 'red'
};

Winston.addColors(customColors);

let transports = [
  new(Winston.transports.Console)({
    level: process.env.CONSOLE_LOG_LEVEL || 'info',
    timestamp: () => { return moment().format(); },
    colorize: true,
    showLevel: true
  })
];

if (process.env.LOG_TO_FILE === 'true') {
  transports.push(new (Winston.transports.File)({
    level: process.env.FILE_LOG_LEVEL || 'info',
    filename: process.env.FILE_LOG_PATH || './logs/main.log',
    timestamp: () => { return moment().format(); },
    json: true,
    showLevel: true
  })
);
};

let logger = new Winston.Logger({
  transports
});

module.exports = logger;
