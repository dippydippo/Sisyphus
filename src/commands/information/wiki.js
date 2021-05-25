const { MessageEmbed } = require('discord.js');
const wiki = require('wikijs').default;

exports.config = {
	path: __filename,
	aliases: ['search'],
};
exports.info = {
	name: 'Wiki',
	description: 'Searches Wikipedia for you and returns the results.',
	category: 'Information',
	usage: '[query]',
};
exports.run = async (client, message, args, text) => {
	let data = {};

	if (args.length == 0) {
		await wiki().random(1).then(r => args.push(r));
	}

	await wiki().page(text || args[0]).then(r => data = r);

	const title = data.raw.title;
	const url = data.raw.fullurl;
	const summary = await data.summary().then(i => i = i.substr(0, 397) + '...');
	const img = await data.mainImage();

	const embed = new MessageEmbed()
		.setColor('#cc1313')
		.setTitle(title)
		.setURL(url)
		.setImage(img)
		.setDescription(summary);
	message.channel.send(embed);
};