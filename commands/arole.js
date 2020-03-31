const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {


if(message.author.id !== "467507740269477908") return message.channel.send("Failed, you tried to use a owner command!");


let role = message.guild.roles.find(r => r.name == '☢Admin') 
if (!role) return message.channel.send(`**${message.author.username}**, role not found`) 

message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role)) 
message.channel.send(`**Master**, role **${role.name}** was added to all members`)

};