/*

Logger class for easy and aesthetically pleasing console logging 

*/

const chalk = require("chalk");

const moment = require("moment");


exports.log = (content, type = "log") => {



//console.log(chalk.redBright(`..............................................`))
//console.log(chalk.redBright(`.............................................`))
//console.log(chalk.redBright(`.......BOT NAME: Denty's Neko Maid#5608.......`))
//console.log(chalk.redBright(`..............STATUS: Online.................`))
//console.log(chalk.redBright(`.............................................`))
//console.log(chalk.redBright(`.............................................`))




  const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;

  switch (type) {

    case "log": {

      return console.log(`${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `);

    }

    case "warn": {

      return console.log(`${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);

    }

    case "error": {

      return console.log(`${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `);

    }

    case "debug": {

      return console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);

    }

    case "cmd": {

      return console.log(`${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`);

    }

    case "ready": {

      return console.log(``);

    }

    default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");

  }





}; 


exports.error = (...args) => this.log(...args, "error");


exports.warn = (...args) => this.log(...args, "warn");


exports.debug = (...args) => this.log(...args, "debug");


exports.cmd = (...args) => this.log(...args, "cmd");


