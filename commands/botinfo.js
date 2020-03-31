const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


  var embed = new Discord.RichEmbed()

      .addField("Bot Name", "Denty's Neko Maid", true)
    
      .addField("Owner", "⋞Denty Mods⋟(LxS)#2745", true)

         .addField("You can invite Denty's Maid Bot to your server by", "[Clicking here](https://discordapp.com/oauth2/authorize?client_id=546793683735937034&scope=bot&permissions=268435646)", true)
 
      .addField("How To Donate", "Type (d.donate) To Donate!", true) 
      
      .addField("Programming Language", "Javascript Discord.js :: v11.4.2", true)

      .addField("Node Version", "Node ::v11.14.0", true)
  
      .addField("For Statistics Type", "{d.statistics} ", true)

      .addField("d.changelog", "Shows All The Latest Commands And Bugs", true)

      .setColor("#fc03e3")



  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "embed"

}

