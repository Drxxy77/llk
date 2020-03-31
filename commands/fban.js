const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!")



// Easy way to get member object though mentions.
var member = message.mentions.members.first();
// ban
member.ban().then((member) => {
    // Successmessage
    message.channel.send(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
}).catch(() => {
    // Failmessage
    message.channel.send("Access Denied");
});
};