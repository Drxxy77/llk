exports.run = async (client, message, args) => {
  if (message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!")
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })

    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'guilds',
  description: 'Guilds!',
  usage: 'guilds'
};
