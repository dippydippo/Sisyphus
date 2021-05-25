const fs = require('fs');

exports.config = {
	devname: __filename,
	aliases: ['lc', 'load'],
	ownerOnly: true,
	minArgs: 1,
};

exports.info = {
	name: 'Load Command',
	category: 'Devtools',
	description: 'Loads a command, only usable by devs',
	usage: '<command name>',
};

exports.run = (client, message, args) => {

	const commandName = args[0].toLowerCase();

	const folderName = fs.readdirSync('./src/commands').find(folder => fs.readdirSync(`./src/commands/${folder}`).includes(`${commandName}.js`));

	try {
		const newCommand = require(`../${folderName}/${commandName}`);
		client.commands.set(commandName, newCommand);
		message.reply(`Command ${commandName} was successfully reloaded`);
	}
	catch (error) {
		console.error(error);
		message.channel.send(`There was an error while trying to load command ${commandName}`);
	}

};