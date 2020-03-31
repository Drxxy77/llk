
const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


  var embed = new Discord.RichEmbed()
 .setTitle('Commands: NSFW')
 .setDescription('d.hentai, d.rule34 <tag>, d.boobsgif, d.cumgif, d.nekogif, d.pussygif, d.cum, d.pussy, d.blowjob, d.yuri, d.sologirlgif, d.sologirl, d.keta, d.kitsune, d.erololi, d.erokemo,')
 

   

   .setColor("#fc03e3")

     


  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "NSFW embed"

}






