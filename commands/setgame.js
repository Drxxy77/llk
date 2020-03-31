const Discord = require("discord.js");
exports.run = async (client, message, args) => {
   if (message.author.id == client.config.ownerid) {
    var gametoset = args.join(' ');
    if (!gametoset) gametoset = null;
    client.user.setActivity(gametoset);
    message.reply("The new game has been set!");
    } else {
      message.reply("Failed, you tried to use a owner command!")
    }
}