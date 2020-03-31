const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


  var embed = new Discord.RichEmbed()
    .setTitle('Commands: Moderation')
    .addField("d.kick [@User] [Reason] ", "Kicks The @User.",)
    .addField("d.ban [@User] [Reason] ","Ban's The @User.",)
    .addField("d.warn [@user] [Reason]","Warn's The @User With An DM Of The Reason. ",)  
    .addField("d.lockdown (Time)","Locks Down A Channel For (Time) ",)
    .addField("d.clear (Number) ", "Clears Messages.",) 
    .addField("d.mute [@user] (reason) ","Mutes The @user. ",)  
    .addField("d.unmute [@user] (reason) ","Unmutes The @user. ",)  

      .setColor("#fc03e3")

     


  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "Mod Help embed"

}

