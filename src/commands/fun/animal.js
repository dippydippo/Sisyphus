const get = require('../../structure/functions/getapi');
const { MessageEmbed } = require('discord.js');

exports.config = {
	path: __filename,
};
exports.info = {
	name: 'Animal',
	category: 'Fun',
	description: 'Gives you a random image of an animal of your own choosing!',
	usage: '[animal]',
};
exports.run = async (client, message, args) => {
	const animals = ['red panda', 'cat', 'dog', 'panda', 'birb', 'fox', 'koala'];
	if (args.length === 0) {
		args.push(animals[Math.floor(Math.random() * animals.length)]);
	}
	const animal = args.join('_').toLowerCase();
	const img = await get.link('img', animal);
	const embed = new MessageEmbed()
		.setColor('#cc1313')
		.setTitle('Here\'s your cute animal!')
		.setImage(img);
	message.channel.send(embed);
};