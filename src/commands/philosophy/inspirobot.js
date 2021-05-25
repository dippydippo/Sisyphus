const get = require('../../structure/functions/getapi');
const titles = require('../../structure/data/inspirobotquotes.json');
const { MessageEmbed } = require('discord.js');

exports.config = {
	path: __filename,
	aliases: ['inspire'],
};
exports.info = {
	name: 'Inspirobot Quote',
	category: 'Philosophy',
	description: 'Get a random inspirobot quote.',
	usage: '',
};
exports.run = async (client, message) => {
	const keys = Object.keys(titles);
	const randKey = keys[Math.floor(Math.random() * keys.length)];
	const title = titles[randKey];
	if (title == 'WHERE AM I?!') {
		await message.channel.send('HO~W Can I gE~~T~~ oU**T** _o_F HeREE!>>???!!???').then(msg => msg.delete({ timeout: 2000 }));
		await message.channel.send({ files: ['https://i.imgur.com/A7Rjik3.png'] }).then(msg => msg.delete({ timeout: 3000 }));
		const newtitle = titles[randKey];
		const quote = await get.inspirobot();
		const embed = new MessageEmbed()
			.setColor('#cc1313')
			.setTitle(newtitle)
			.setImage(quote);
		message.channel.send(embed);
	}
	else {
		const quote = await get.inspirobot();
		const embed = new MessageEmbed()
			.setColor('#cc1313')
			.setTitle(title)
			.setImage(quote);
		message.channel.send(embed);
	}
};