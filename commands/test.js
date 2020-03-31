const mysql = require("mysql");
const Discord = require("discord.js");

module.exports.run = async(client, message, con) => {

 

    if(message.author.id !== "467507740269477908") return message.channel.send("Failed, you tried to use a owner command!");


    var con = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "0000",
        database: "sadb"
      });

        
      con.query("SELECT COUNT(id) FROM xp", function (err, rows) {
        if (err) throw err;
        console.log(rows); 
          

        message.channel.send(rows);

                    
    
            }
            )};
      