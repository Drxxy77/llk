const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    if (!message.guild) return;
    //Check permissions
    let permission = 'BAN_MEMBERS';
    const error101 = new Discord.RichEmbed()
    .setTitle('Error 101')
    .setDescription(`Missing Permissions! You need \`${permission}\``)


    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(error101);    
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions

    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
            member.send(`**You\'ve been banned from** \`${message.guild}\``);       
        member.ban({
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
      

    let banEmbed = new Discord.RichEmbed()
        .setDescription("◇USER WAS BANNED◇")
        .setColor("#bc0000")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "d-log");
    if (!incidentchannel) return message.channel.send("Ethier The Channel 'd-log' Was Not Found Or There Was A Error, If You Think This Is A Error Please Contact Master                                               `⋞Denty Mods⋟(LxS)#2745` .");

    message.guild.member(bUser).ban(bReason);
   incidentchannel.send(banEmbed);
});
};
};
};