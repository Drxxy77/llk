const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args, ds) => {


  let url = [



  "https://i.imgur.com/1yja5ar.gif",
  "https://i.imgur.com/di7FZcq.gif",
  "https://i.imgur.com/IT4OVAH.gif",
  "https://i.imgur.com/yJNPHz2.gif",
  "https://i.imgur.com/kmmpuIe.gif",
  "https://i.imgur.com/ZbAcxet.gif",
  "https://i.imgur.com/spdMTtC.gif",
  "https://i.imgur.com/mCLNteg.gif",
   "https://i.imgur.com/GS7PEx9.gif"



]


        var recipient = message.mentions.users.first();

        var hug = url[Math.round(Math.random() * (url.length - 1))]


        if (!recipient) {


            return message.channel.send('Specify a user')


        }

        

        if (message.mentions.users.first() === message.author) {

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`You can't lick yourself, but I'll lick you ^_^ , ${message.author.username}!`)

                .setImage(hug);

            return message.channel.send(embed);


        } 

    //sa

        if (message.mentions.users.first() === bot.user) {

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`ల(\*´= ◡ =｀\*) Such a nice lick..thank you Senpai~~`)

                .setImage(hug);

            return message.channel.send(embed);


        } 

      

        if ( message.mentions.users.first()){

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`${message.author.username} licked ${recipient.username}!`)

                .setImage(hug);

            return message.channel.send(embed);

        } 

}


exports.help = {

  name: "lick",

  description: "lick Someone",

  usage: "d.lick <user>",

  aliases: ["lick "],

  category: "action",

  perm: 0

}






