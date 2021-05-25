const getid = require('../../structure/functions/getid');
const { MessageEmbed } = require('discord.js');

exports.config = {
	aliases: ['pfp', 'av'],
};

exports.info = {
	name: 'Something',
	description: 'Get users avatar',
	category: 'Utility',
	usage: '<user mention>',
};

exports.run = (client, message, args) => {
	if (args.length === 0) {
		args.push(`<@!${message.author.id}>`);
	}
	const user = getid.getUser(client, args[0]);
	const embed = new MessageEmbed()
		.setColor('#cc1313')
		.setDescription(`<@!${user.id}>'s avatar.`)
		.setImage(user.displayAvatarURL({ format:'png', dynamic:true, size:4096 }));
	message.channel.send(embed);
};