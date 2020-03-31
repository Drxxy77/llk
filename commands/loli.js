const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    
    let swatEmbed = new Discord.RichEmbed()
    .setDescription(`Oh No`)
    .setColor(`#000000`)
    .setImage(`https://media1.tenor.com/images/93d11bc59526ce49f60766f0045d819b/tenor.gif?itemid=11500735`)
    message.channel.send(swatEmbed)

}
