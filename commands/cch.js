//shows the selected servers channels (for cheating usages)

const Discord = module.require('discord.js');
var fn = require('fn'); 


module.exports.run = async (client, message, args) => {

if(message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!");






const f = client.guilds.find(guild => guild.name === "Denty's Neko Bot Support").channels.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  

    console.log(`\`\`\`${f.join("\n")}\`\`\``)
    
    
    
    
    
    
    message.channel.send("CCH Was Logged!");
};