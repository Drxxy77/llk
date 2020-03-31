const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Permission!");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
        .setDescription("◇USER WAS KICKED◇")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Tiime", message.createdAt)
        .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "d-log");
    if (!kickChannel) return message.channel.send("Ethier The Channel 'd-log' Was Not Found Or There Was A Error, If You Think This Is A Error Please Contact Master                                               `⋞Denty Mods⋟(LxS)#2745` .");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

message.delete(); // Deletes the command


}