const mysql = require("mysql");
const Discord = require("discord.js");

module.exports.run = async(client, message, args, con) => {

    var con = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "0000",
        database: "sadb"
        });
        let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

        console.log(target);
        console.log(target.username);
        
        con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
            if (err) {
                throw err;
            }

            if (!rows[0]) {
                return message.channel.send(`${target.username} has no XP on record.`);
            }

            let xp = rows[0].xp;
            let level = Math.floor(xp / client.config.levelXP);
            let needXP = (level + 1) * client.config.levelXP - xp;


            let info = new Discord.RichEmbed()
                .setTitle(`${target.username}'s Rank`)
                .setDescription('Level up by constantly participating in the chat(NOTE: When you chat in other servers it adds up, this system is not like mee6)')
                .setColor(0x800080)
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .addField('Current XP', xp, true)
                .addField('Current Level', level, true)
                .addField('XP needed for next level', needXP, true)
                .setFooter(`${target.username}`, `${message.author.displayAvatarURL}`)
                .setTimestamp(new Date());

            
            message.channel.send(info);
        });
    };