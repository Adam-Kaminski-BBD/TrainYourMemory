const chalk = require('chalk');

const types = {
  LOG: 'LOG',
  ERROR: 'ERROR',
  INFO: 'INFO'
};


/**
 * Just a more sophisticated log function for debugging
 * @param {String} type LOG/ERROR/INFO for type of console print 
 * @param {String} message Message to be print 
 */
function log(message, type = 'LOG') {
  const now = new Date();
  const dateTimeString = now.toISOString();
  switch (type.toUpperCase()) {
  case types.LOG:
    console.log(chalk.gray(types.LOG + ' : ' + dateTimeString + ' : ' + message));
    break;
  case types.ERROR:
    console.error(chalk.red(types.ERROR + ' : ' + dateTimeString + ' : ' + message));
    break;
  case types.INFO:
    console.info(chalk.white(types.INFO + ' : ' + dateTimeString + ' : ' + chalk.blue(message)));
    break;
  }
}


module.exports = {
  log
};
