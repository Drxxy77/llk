exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

if (message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!")

    let botmessage = args.join(" ");

    message.delete().catch();

    message.channel.send(botmessage);

}


module.exports.help = {

    name: "say"

}



