exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars

if (message.author.id !== client.config.ownerid) return message.channel.send("Failed, you tried to use a owner command!")


message.channel.send("Bot is restarting (5;)")


function resetBot(channel) {


(message => client.destroy()) 
.then(() => client.login("NTQ2NzkzNjgzNzM1OTM3MDM0.XNM06Q.JFkHdWx9VJXt_01UWVC5SztvENU"))
};


};