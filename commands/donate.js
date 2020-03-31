exports.run = (client, message) => {
	message.author.send({
		embed: {
			author: { name: `Make a donation!` },
			description: `
Hi, I'm the creator of Denty's Neko Maid Bot And The Server [DentyTEAM](https://discord.gg/jURckuK). As some of you may know I'm low on money, So that's mainly the reason I'm doing this and so i can make more commands for the bot and get a better VPS, So Please donate, even $1 helps me alot! 

A story about me, I am 14 and i love to Program and code stuff, And I'm a big fan of Destiny, Mostly because I was a beta tester for the first one, My family is trying to move because we are broke on money and we can't keep 2 places at once so we are selling one place and moving to the other, But our place right now is crappy and probably not going to get a lot of money selling it. So that's why any bit of money with donating will help! 

Donater's Get A Special Role If They Are In My Server!


[Paypal](https://www.paypal.me/Dentymods1)`,
			color: 0xFF0000
		}
	});
	message.channel.send(":white_check_mark: I have sent my donation information to you through Direct Messages.").then(x => x.delete(10000))
};