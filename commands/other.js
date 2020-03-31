const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {



  var embed = new Discord.RichEmbed()
.setTitle('Commands: Other')
.addField("d.invite", "Bot Invite Link.",) 
.addField("d.botinfo", "Bot Info.",) 
.addField("d.statistics", "Shows The Statistics Of The Bot.",) 
.addField("d.add (Command name and how it should be used)", "Sends A Command Suggestion To Master.",) 
.addField("d.serverinfo", "Shows Info About The Server.",) 
.addField("d.ping", "Shows The Ping.",) 
.addField("d.userinfo (@User) ", "Shows Info About @User.",) 
.addField("d.donate", "Donate To The Bot, Please. ", ) 
.addField("d.donators", "Shows All The People That Donated. ",) 





   .setColor("#fc03e3")

     


  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "Help embed"

}

