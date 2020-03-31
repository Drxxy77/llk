const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
     let sicon = message.guild.iconURL;
          let serverembed = new Discord.RichEmbed()
          .setDescription("Guild Info")
          .setColor("#fc03e3")
          .setThumbnail(sicon)
          .setTimestamp()
          .addField(":arrow_right: Guild Name", message.guild.name)
          .addField(":arrow_right: Created On", message.guild.createdAt)
          .addField(":arrow_right: You Joined", message.member.joinedAt)
          .addField(":arrow_right: Guild Owner", message.guild.owner)
          .addField(":arrow_right: Total Members", message.guild.memberCount);
          return message.channel.send(serverembed);
       };

module.exports.help = {
    name: "Guild"
};
