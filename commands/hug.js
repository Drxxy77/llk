const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args, ds) => {


  let url = [

    "https://i.imgur.com/4oLIrwj.gif",

    "https://i.imgur.com/wOmoeF8.gif",

    "https://i.imgur.com/ntqYLGl.gif",

    "https://i.imgur.com/6qYOUQF.gif",

    "https://i.imgur.com/r9aU2xv.gif",

    "https://i.imgur.com/v47M1S4.gif",

    "https://i.imgur.com/82xVqUg.gif",

    "https://i.imgur.com/diqFHSS.gif",

    "https://i.imgur.com/WvgL0rE.gif",

    "https://i.imgur.com/CxmswPU.gif",

    "https://i.imgur.com/pZa9Ppe.gif",

    "https://i.imgur.com/QghzxNa.gif",

    "https://i.imgur.com/Z5DpKer.gif",

    "https://i.imgur.com/J9EDW2g.gif",

    "https://i.imgur.com/33GnoBC.gif",

    "https://i.imgur.com/QNNA4M2.gif",

    "https://i.imgur.com/LWhsSJU.gif",

    "https://i.imgur.com/nOuAxhI.gif",

    "https://i.imgur.com/YfkTt9h.gif",

    "https://i.imgur.com/qSejAy0.gif",

    "https://i.imgur.com/vFwUm3E.gif",

    "https://i.imgur.com/kif6tPp.gif",

    "https://i.imgur.com/QBlUzrl.gif",

    "https://i.imgur.com/NjUA3dn.gif",

    "https://i.imgur.com/x11OYI1.gif",

    "https://i.imgur.com/EVtWJHw.gif",

    "https://i.imgur.com/UcSS0oZ.gif",

    "https://i.imgur.com/HNcRPJ7.gif",

    "https://i.imgur.com/1jZ7TBv.gif",

    "https://i.imgur.com/P6KLS0T.gif",

    "https://i.imgur.com/oDNvTyt.gif",

    "https://i.imgur.com/LZBcwKd.gif",

    "https://i.imgur.com/CU8uP3Y.gif",

    "https://i.imgur.com/2Un7CYs.gif",

    "https://i.imgur.com/xRZ7zg1.gif",

    "https://i.imgur.com/ZzYUNjv.gif",

    "https://i.imgur.com/OGHfXlE.gif",

    "https://i.imgur.com/KPbKHJ1.gif",

    "https://i.imgur.com/QdETnvv.gif",

    "https://i.imgur.com/rPoxqas.gif",

    "https://i.imgur.com/iI3o7t0.gif",

    "https://i.imgur.com/hcxDeFZ.gif",

    "https://i.imgur.com/y03B2dL.gif",

    "https://i.imgur.com/la2DSbP.gif",

    "https://i.imgur.com/I8LyQ9L.gif",

    "https://i.imgur.com/SOMVzbs.gif",

    "https://i.imgur.com/YXWnCwv.gif",

    "https://i.imgur.com/Y9CAUOl.gif",

    "https://i.imgur.com/GYHunne.gif",

    "https://i.imgur.com/WEQjiiT.gif",

    "https://i.imgur.com/w0Phmum.gif",

    "https://i.imgur.com/Mi0m04x.gif",

    "https://i.imgur.com/KN2ahrk.gif",

    "https://i.imgur.com/2v3eUQw.gif",

    "https://i.imgur.com/OIPxM9W.gif",

    "https://i.imgur.com/yLLtIQ1.gif"

]


        var recipient = message.mentions.users.first();

        var hug = url[Math.round(Math.random() * (url.length - 1))]


        if (!recipient) {


            return message.channel.send('Specify a user')


        }

        

        if (message.mentions.users.first() === message.author) {

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`You can't hug yourself, but I'll hug you, ${message.author.username}!`)

                .setImage(hug);

            return message.channel.send(embed);


        } 

    //sa

        if (message.mentions.users.first() === bot.user) {

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`ల(\*´= ◡ =｀\*) Such a warm hug..thank you Nyaa~~`)

                .setImage(hug);

            return message.channel.send(embed);


        } 

      

        if ( message.mentions.users.first()){

            const embed = new Discord.RichEmbed()

                .setColor('#ff7293')

                .setTitle(`${message.author.username} hugs ${recipient.username}!`)

                .setImage(hug);

            return message.channel.send(embed);

        } 

}


exports.help = {

  name: "hug",

  description: "Hug Someone",

  usage: "!hug <user>",

  aliases: [" cuddle "],

  category: "action",

  perm: 0

}


