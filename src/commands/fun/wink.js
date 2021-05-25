const get = require('../../structure/functions/getapi');
const getUser = require('../../structure/functions/getid');
const { MessageEmbed } = require('discord.js');

exports.info = {
	name: 'Wink',
	category: 'Fun',
	description: 'Wink at somebody',
	usage: '<user mention>',
};

exports.config = {
	minArgs: 1,
};

exports.run = async (client, message, args) => {
	const userid = await getUser.getUser(client, args[0]);
	const img = await get.link('animu', 'wink');
	const embed = new MessageEmbed()
		.setColor('#cc1313')
		.setDescription(`<@!${message.author.id}> is winking at <@!${userid.id}>`)
		.setImage(img);
	message.channel.send(embed);
};