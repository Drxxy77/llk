const Discord = require('discord.js');
const moment = require("moment");

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};

exports.run = (client, message, args) =>{
   
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    
    
    
    const embed = new Discord.RichEmbed()
        .setColor("#fc03e3")
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField('Joined server at: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Created account at: ",`${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        
        .addField(`Roles [${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)

.setFooter("Please note that this is not the full command, We want more people's opinion at our support server https://discord.gg/WmgTmXJ");
    message.channel.send({embed});
}