const Discord = require("discord.js");
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
        const { body } = await snekfetch
            .get('https://nekos.life/api/v2/img/pussy_jpg')
       
        if (!message.channel.nsfw) return message.channel.send("Cannot send NSFW content in a SFW channel.")
        const embed = new Discord.RichEmbed()
        .setImage(body.url)
        message.channel.send(embed).catch(console.error);
  }