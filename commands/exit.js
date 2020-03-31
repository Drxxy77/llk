exports.run = async (client, message) => {

if(message.author.id !== "467507740269477908") return message.channel.send("Failed, you tried to use a owner command!");


    await message.delete().catch();
    await message.channel.send(`Good night, DentyMods`);
    await process.exit().catch((e) => { console.error(e); });
};
  
exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  aliases: ["sleep"],
  permLevel: 10,
  botPerms: [], 
};
  
exports.help = {
  name: "exit",
  description: "Shuts down the bot.",
  usage: "",
};  