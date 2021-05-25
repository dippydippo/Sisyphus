const get = require('../../structure/functions/getapi');
const getUser = require('../../structure/functions/getid');
const { MessageEmbed } = require('discord.js');

exports.info = {
	name: 'Pat',
	category: 'Fun',
	description: 'Give somebody a nice pat.',
	usage: '<user mention>',
};

exports.config = {
	path: __filename,
	minArgs: 1,
};

exports.run = async (client, message, args) => {
	const userid = await getUser.getUser(client, args[0]);
	const img = await get.link('animu', 'pat');
	const embed = new MessageEmbed()
		.setColor('#cc1313')
		.setDescription(`Pat pat <@!${userid.id}>`)
		.setImage(img);
	message.channel.send(embed);
};