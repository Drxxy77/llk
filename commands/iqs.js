const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {

if(message.author.id !== "467507740269477908") return message.channel.send("Failed, you tried to use a owner command!");




    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)


        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
      })
   };