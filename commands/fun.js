const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {


  var embed = new Discord.RichEmbed()

.setTitle('Commands: Fun')
.addField("d.8ball (Question) ", "Ask A Question To Da Gods.",) 
.addField("d.anime (Anime Name)", "Shows Info About The Anime, For Example How Many Episodes The Anime Has.",) 
.addField("d.ascii (Text)", "Shows Text In Ascii.",) 
.addField("d.avatar (@User)", "Gets @User's Avatar.",) 
.addField("d.coin", "Making A Bet? How About Flipping A Coin.",) 
.addField("d.embeder (color Title Descrip)", "Makes An Embed With, Example d.embeder blue Test Oof.", ) 
.addField("d.kms", "Kill Myself? ",) 
.addField("d.roulette", "Good Old Russian Roulette",)
.addField("d.roles", "Shows All The Servers Roles.",) 
.addField("d.ship (@User1 @User2)", "Is Their Relationship Good?",) 
.addField("d.listemojis", "Shows All The Servers Emojis. ",) 
.addField("d.notice", "I Have Noticed You.",) 
.addField("d.hug @User ", "Hugs Them.",) 
.addField("d.kiss @User", "owo, Kissing Time.",) 
.addField(`d.lick @User`, `I Wonder How They Taste. `,) 
.addField("d.vote", "Makes A Poll Vote. ", ) 
.addField("d.invite", "Invite Me To Your Server Boiii.",) 



   .setColor("#fc03e3")

     


  message.channel.send({embed: embed});

}


module.exports.help = {

    name: "Help embed"

}

