const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


  var embed = new Discord.RichEmbed()

      .addField("Bot Name", "Drxxy Jr", true)
    
      .addField("Owner", "Drxxy#3671", true)

         .addField("You want a custom made discord bot?", "DM Drxxy#3671 I will put the utmost effor into your bot!", true)
 
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

