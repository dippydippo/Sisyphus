const path = require('path');

exports.config = {
	path: __filename,
	aliases: ['rl'],
	ownerOnly: true,
	minArgs: 1,
};
exports.info = {
	name: 'Reload command',
	description: 'Reloads a command to apply changes, only usable by devs',
	category: 'Devtools',
	usage: '',
};
exports.run = (client, message, args) => {

	const commandName = args[0].toLowerCase();
	const newcmd = client.commands.get(commandName) || client.commands.find(comm => comm.config.aliases && comm.config.aliases.includes(commandName));
	const cmdPath = newcmd.config.path;

	if (!newcmd) return message.reply(`Command with name or alias ${commandName} doesn't exist.`);

	delete require.cache[require.resolve(cmdPath)];

	try {
		const newCommand = require(cmdPath);
		client.commands.set(path.basename(cmdPath), newCommand);
		message.reply(`Command ${commandName} was successfully reloaded`);
	}
	catch (error) {
		console.error(error);
		message.channel.send(`There was an error while trying to reload command ${commandName}`);
	}

};