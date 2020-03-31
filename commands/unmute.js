const Discord = require("discord.js");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {


    let umMember = message.mentions.members.first();
    if (!umMember) return message.reply("I can't find that user.");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not allowed to do this");
    let muteRole = message.guild.roles.find(c => c.name === "muted");
    if (!umMember.roles.has(muteRole.id)) return message.reply("That member is not muted");
    let umReason = args.slice(1).join(" ") || "None";
    let umIcon = umMember.user.displayAvatarURL;

    let umEmbed = new Discord.RichEmbed()
    .setColor("#fc03e3")
    .setThumbnail(umIcon)
    .addField("User unmuted", `${umMember} with ID ${umMember.id}`)
    .addField("Unmuted by", `${message.member} at ${message.createdAt.toLocaleString()}`)
    .addField("Reason for unmute", umReason);

    let logChannel = message.guild.channels.find(c => c.name === "d-log");
    if (!logChannel) return message.reply("I can't seem to find the d-log channel.")

    message.delete();
    umMember.removeRole(muteRole.id);
    logChannel.send(umEmbed);
}

module.exports.help = {
    name: "unmute"
}
