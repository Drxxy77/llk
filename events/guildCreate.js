module.exports = (client, guild, bot) => {
    client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);

guild.owner.user.send("Hello, Thanks for adding me to your server (Or one of your staff did). The prefix is `d.`! The Bot Support Server: https://discord.gg/WmgTmXJ");

client.logger.cmd(`Message Sent To ${guild.owner.user.tag}`);

};