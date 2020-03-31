exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

if(message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!");


    if (args.length  < 1) return message.reply("You Need To Say What Server ID.");
     
    client.guilds.get(args.join(" ")).leave()
    .then(g => console.log(`The Command (d.lserver) Was Used And I Have Lefted ${g}`)) .catch(console.error);
    };