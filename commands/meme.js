const randomPuppy = require('random-puppy');
const talkedRecently = new Set();


module.exports.run = async (bot, message, args) => {

if (talkedRecently.has(message.author.id)) { 
message.channel.send("Please wait 5 seconds before using this command!" + message.author); 
} else {


    let reddit = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

talkedRecently.add(message.author.id); 
setTimeout(() => {

talkedRecently.delete(message.author.id);
 }, 5000); 
}

