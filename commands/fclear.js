exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

if (message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!")

  let messagecount = parseInt(args[0]);


  if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please Enter A Numeric Value!");


  if(messagecount > 100){

    message.channel.send(":x: " + "| Sorry, You can only clean upto 100 messages at a time!")

  }else if(messagecount < 1 ) {

    message.channel.send(":x: " + "| Sorry, You can only clean upto 100 messages at a time!")

  } else {


  }{

    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));

  }

}


module.exports.help = {

    name: "clear"

}

