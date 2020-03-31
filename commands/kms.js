const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args, ds) => {

               
                const embed = new Discord.RichEmbed()
                .setImage("https://www.themebeta.com/media/cache/728/files/chrome/images/201802/28/22f93f160bb565b437c2a9072d7f6170.png")
                .setColor('#ff7293')

                .setTitle(`Don't Do It Man!`);


            return message.channel.send(embed);


        }