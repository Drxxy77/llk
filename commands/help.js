const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {

  var embed = new Discord.RichEmbed()
.setTitle('Commands')
.addField("d.fun", "Shows All 'Fun' Commands!",)
.addField("d.moderation", "Shows All Moderation Commands!",)
.addField("d.nsfw", "Shows All NSFW Commands!",)
.addField("d.other", "Shows Other Commands Like Bot Info And Statistics!",) 


   .setColor("#fc03e3")

     


  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "Help embed"

}

