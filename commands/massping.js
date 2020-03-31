const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (message.author.id !== client.config.ownerid) return (message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: `Failed, you tried to use a owner command!` } })); 
let user = message.mentions.users.first();
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'massping',
  description: 'Mass-ping someone!',
  usage: 'massping <user>'
};
