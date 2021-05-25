const assigndef = require('../functions/assigndef');

module.exports = (client, message) => {
	if (message.author.bot || !message.content.startsWith(process.env.prefix)) return;

	const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const text = args.flat().join(' ');

	const cmd = client.commands.get(command) || client.commands.find(comm => comm.config.aliases && comm.config.aliases.includes(command));

	if (!cmd) return;

	assigndef(client, cmd);

	if (!cmd.config.enabled) return message.reply(`\`${command}\` is disabled.`);


	if (cmd.config.reqPerms.length > 0) {
		const userPerms = message.channel.permissionsFor(message.author);
		if (!userPerms || !userPerms.has(cmd.config.reqPerms)) {
			message.reply('You lack the required permissions to execute this command.');
			return;
		}
	}

	if (cmd.config.acceptedArgs !== null && !cmd.config.acceptedArgs.includes(text)) return message.reply(`**ERROR:** Invalid argument passed.\n Valid arguments: \`${cmd.config.acceptedArgs.join(' | ')}\``);

	if (cmd.config.ownerOnly && !(message.author.id === process.env.ownerid || process.env.otaid)) return message.reply('Only bot owners can execute this command');

	if (cmd.config.guildOnly && message.channel.type === 'dm') return message.reply('You cannot use this command in DMs.');

	if (args.length < cmd.config.minArgs) return message.reply(`Unexpected usage! \nProper command usage: \`${process.env.prefix}${command} ${cmd.info.usage}\``);

	try {
		cmd.run(client, message, args, text);
	}
	catch (error) {
		console.error(error);
		message.reply(`There was an error trying to execute ${command} \n${error}`);
	}
};