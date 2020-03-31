
const malscraper = require('mal-scraper')
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    let anime = args[0]
    malscraper.getInfoFromName(anime)
    
    .then((data => {
        const embed = new Discord.RichEmbed()
        .setTitle(`Search Result: ${data.title}`)
        .setDescription(`**Title:** ${data.japaneseTitle} [${data.englishTitle}]\n**Type: **${data.type}\n**Episodes: **${data.episodes}\n**Rating: **${data.rating}\n**Aired: **${data.aired}\n**Score: **${data.score}\n**Trailer: **${data.trailer}`)
        .setFooter(data.title)
        .setColor("#fc03e3")
        .setThumbnail(data.picture)
        message.channel.send(embed)
      
    }))
    if(!args[0]){
  return message.channel.send("You Need To Say A Anime, For Example (d.anime Toradora   or   d.anime darling_in_the_franxx) ")
}
    
    
};