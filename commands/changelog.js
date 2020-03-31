const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


  var embed = new Discord.RichEmbed()

.setTitle("All Bugs/Latest Commands!")
 
.addField("《NEW COMMANDS》", "d.rule34 <tag> | d.meme | d.addrole | d.removerole |", true)    
 



.addField("《BUGS》", "None!", true)    

.setColor("#fc03e3")



  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "embed"

}

