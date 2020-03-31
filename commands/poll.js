const Discord = module.require('discord.js');
var fn = require('fn'); 


module.exports.run = async (client, message, args) => {


let question = args.slice(0).join(" ");
  
    if (!args) return message.channel.send('**Test**')
  
    const embed = new Discord.RichEmbed()
    .setTitle(`Poll Created By ${message.author.tag}`)
    .setColor("#fc03e3")
    .setDescription(`${question}`)
    const pollTitle = await message.channel.send({ embed });
    message.channel.send({pollTitle})
    pollTitle.react('👍')
    .then(() => pollTitle.react('👎'))
    .catch(() => console.error('Emoji failed to react.'));
  
  
  
  

}