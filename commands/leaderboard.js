const mysql = require("mysql");
const Discord = require("discord.js");

module.exports.run = async(client, message, args, con) => {

message.channel.send(`${message.author.tag} Sorry but this command is broken and is being fixed, Please use (d.xp) and (d.profile) for now.`)

};

   /// var con = mysql.createConnection({
    ///    host:"localhost",
    ///    user: "root",
    ///    password: "0000",
    ///    database: "sadb"
    ///    });
        ///con.query('SELECT id, xp FROM xp ORDER BY xp DESC', (err, rows) => {
           /// if (err) {
              ///  throw err;
         ///   }

     ///       const embed = new Discord.RichEmbed()
      ///          .setColor('#fc03e3')
      ///          .setTitle(`${message.guild.name}'s XP Leaderboard`)
      ///          .setFooter('Servers XP  ', message.guild.iconURL);

      ///      let order = 0;
      ///      for(let i = 0; i < 10; i++) {
      ///          if(i > rows.length - 1) {
      ///              break;
       ///         }
                
       ///         if (message.guild.members.get(rows[i].id)) {
      ///              const user = message.guild.members.get(rows[i].id).user;
        ///            if(!user.bot) {
       ///                 embed.addField(`Username`, user.username, true)
       ///                 .addField('- :arrow_right:', rows[i].xp, true);
        ///                order++;
      ///              }
      ///          }
    ///        }
            
            ///message.channel.send(embed);
 ///       });
///    };
