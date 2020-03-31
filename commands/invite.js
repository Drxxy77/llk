const Discord = module.require('discord.js');
var getJSON = require('get-json');

module.exports.run = async (bot, message, args) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "OWNERS SERVER: " + "**__", "https://discord.gg/jURckuK", true)
         .addField("__**" + "SUPPORT SERVER: " + "**__", "https://discord.gg/WmgTmXJ", true)
          .addField("__**" + "BOT INVITE LINK: " + "**__", "https://discordapp.com/oauth2/authorize?client_id=546793683735937034&scope=bot&permissions=21512", false)


          .setColor("#fc03e3")

  message.channel.send({embed: invite});
}

module.exports.help = {
    name: "invite"
}
