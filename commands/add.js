const Discord = module.require('discord.js');
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {

console.log(chalk.black(`----`))
console.log(chalk.black(`----`))
console.log(`--------------------`)
console.log(chalk.green(`USER INFO`))

console.log(chalk.blue(`FROM ${message.author.tag}  
USER ID: ${message.author.id}`))                                       
console.log(chalk.black(`----`))
console.log(chalk.green(`SERVER INFO`))
console.log(chalk.blue(`SERVER NAME ${message.guild.name}
SERVER ID: ${message.guild.id} 
CHANNEL NAME: ${message.channel.name}
CHANNEL ID: ${message.channel.id}`))



console.log(chalk.yellow(`|The Command Suggestion|\n ` + args.join(` `)))
console.log(`--------------------`)

console.log(chalk.black(`----`))
console.log(chalk.black(`----`))


if(!args[0]){
  return message.channel.send("You Need To Describe The Command And How It Should Be Used!")

if (args[0])
message.channel.send(message.author.toString() + "Hello, The Command Suggestion Was Logged In Terminal And Will Be Seen By Owner, You Might Receive A Message From DentyMods About The Command Suggestion! ");

else message.channel.send("You Need To Describe The Command And How It Should Be Used!")

}};