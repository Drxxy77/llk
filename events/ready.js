module.exports = async client => {


  client.logger.log(`${client.user.tag} Is Online! Bot Is Viewing ${client.users.size} Users. Bot Is In ${client.guilds.size} servers.`, "ready");


  // Make the bot "play the game" which is the help command with default prefix.

  client.user.setActivity(`${client.guilds.size} Servers, Im Back :)`, {type: "WATCHING"});


 // client.user.setActivity(`${client.guilds.size} Servers | d.help`, {type: "WATCHING"});

};

