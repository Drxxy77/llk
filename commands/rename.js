const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!");


  if(!args){
    return message.channel.send(":x: " + "| Please enter a new name for the bot");
  }
  message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send("My New NickName is " + args.join(" ") + "!")).catch(console.error);
   };