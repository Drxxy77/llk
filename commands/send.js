const Discord = module.require('discord.js');
var fn = require('fn'); 


module.exports.run = async (client, message, args) => {

if(message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!");



client.guilds.get("578466711330619392").channels.get("580909507304095779").send("Hello Guild, The Owner Just Made A Support Server! If You Wish To Join And Get The Latest Commands And Info Then Please Join :) https://discord.gg/WmgTmXJ ");

};