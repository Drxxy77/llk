const mysql = require("mysql");
const Discord = require("discord.js");

module.exports.run = async(client, message, args, con) => {
    let target = message.mentions.users.first() || message.guild.members.get(args[1]) ||message.author;

    var con = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "0000",
        database: "sadb"
        });

con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
if(err) throw err;


let xp = rows[0].xp;
const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}'s XP`)
    .setDescription(xp)
    .setColor("#fc03e3")
    message.channel.send({ embed });

});
};