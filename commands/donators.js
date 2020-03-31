const Discord = require('discord.js');
exports.run = (client, message) => {
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setThumbnail(message.author.iconURL)
        .setTitle('**Donators**')
        .setDescription('1.YT-Seren_Modz21#7182')
        .setColor(6583245);
          message.channel.send({embed})
        .catch(console.error);
};