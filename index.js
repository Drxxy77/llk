const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const readline = require('readline');
const {
  get
} = require('https');
const {
  URL,
  URLSearchParams
} = require('url');
const endpoints = require('./endpoints.json');
const chalk = require("chalk");
const actlog = require("discord.js-action-logger");
const prefix = ("d.");
const client = new
Discord.Client();
const config =
  require("./config.json");
client.config = config;
// Terminal log
client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);
fs.readdir("./events/", (err, files) => {
  if (err) return
  console.error(err);
  files.forEach(file => {
    const event =
      require(`./events/${file}`);
    let eventName =
      file.split(".")[0];
    client.on(eventName,
      event.bind(null, client));
  });
})
client.on('guildMemberAd', member => require(
  './events/guildMemberAdd.js')(client, member));
client.commands = new Enmap();
fs.readdir("./commands/", (err,
  files) => {
  if (err) return
  console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js"))
      return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(chalk.blue(
      `[HZRD IS KING] ${commandName} Is Ready!`));
    client.commands.set(commandName, props);
  });
  client.login('TOKEN HERE');
});