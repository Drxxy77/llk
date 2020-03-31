const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


var embed = new Discord.RichEmbed()
 
      .setTitle('Markdown Tutorial')
      .addField('`*italics*` =', '*italics*', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)

      .setColor("#fc03e3")



  message.channel.send({embed: embed});
};