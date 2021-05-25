const { MessageEmbed, Message } = require('discord.js');

exports.config = {
	path: __filename,

};
exports.info = {
	name: 'Help',
	category: 'Utilities',
	description: 'Gives you a list of all commands, or information on a specific command.',
	usage: '[command name]',
};
exports.run = (client, message, args) => {
	if (!args.length) {
		const data = Array.from(client.commands.values());
		const categories = new Set();
		const cmdinfo = [ ];
		for (const cmd of data) {
			categories.add(cmd.info.category);
			cmdinfo.push(cmd.info);
		}
		const embed = new MessageEmbed()
			.setTitle('Sisyphus Help')
			.setFooter('To get information on a specific command use .help <command name>');
		for (const category of categories) {
			console.log(category);
			const name = [];
			cmdinfo.filter(cmd => cmd.category === category).forEach(r => name.push(r.name));
			console.log(name);
			embed.addFields(
				{ name: category, value: `\`${name.join('\n')}\``, inline: false },
			);
		}
		message.channel.send(embed);
	}
};