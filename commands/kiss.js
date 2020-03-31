const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args, ds) => {


  let url = [



  "https://i.imgur.com/JOtxMGW.gif",

  "https://i.imgur.com/II1bakc.gif",
 
  "https://i.imgur.com/eKcWCgS.gif",
 
  "https://i.imgur.com/MzAjNdv.gif",
 
  "https://i.imgur.com/FozOXkB.gif",
 
  "https://i.imgur.com/Uow8no2.gif",
 
  "https://i.imgur.com/agdhkfE.gif",
  
  "https://i.imgur.com/pDScNqs.gif",

  "https://i.imgur.com/nVM7Ll8.gif",

  "https://i.imgur.com/gXPmxS4.gif"



]


        var recipient = message.mentions.users.first();

        var hug = url[Math.round(Math.random() * (url.length - 1))]


        if (!recipient) {


            return message.channel.send('Specify a user')


        }

        

        if (message.mentions.users.first() === message.author) {

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`You can't kiss yourself, but I'll kiss you, ${message.author.username}!`)

                .setImage(hug);

            return message.channel.send(embed);


        } 

    //sa

        if (message.mentions.users.first() === bot.user) {

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`ల(\*´= ◡ =｀\*) Such a nice kiss..thank you Nyaa~~`)

                .setImage(hug);

            return message.channel.send(embed);


        } 

      

        if ( message.mentions.users.first()){

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`${message.author.username} kiss ${recipient.username}!`)

                .setImage(hug);

            return message.channel.send(embed);

        } 

}


exports.help = {

  name: "kiss",

  description: "kiss Someone",

  usage: "d.kiss <user>",

  aliases: [" kiss "],

  category: "action",

  perm: 0

}






