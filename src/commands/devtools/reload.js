const fs = require('fs');

exports.config = {
	aliases: ['rl'],
	ownerOnly: true,
	minArgs: 1,
};
exports.run = (client, message, args) => {

	const commandName = args[0].toLowerCase();
	const newcmd = client.commands.get(commandName) || client.commands.find(comm => comm.config.aliases && comm.config.aliases.includes(commandName));

	if (!newcmd) return message.reply(`Command with name or alias ${commandName} doesn't exist.`);

	const folderName = fs.readdirSync('./src/commands').find(folder => fs.readdirSync(`./src/commands/${folder}`).includes(`${commandName}.js`));

	delete require.cache[require.resolve(`../${folderName}/${commandName}`)];

	try {
		const newCommand = require(`../${folderName}/${commandName}`);
		client.commands.set(commandName, newCommand);
		message.reply(`Command ${commandName} was successfully reloaded`);
	}
	catch (error) {
		console.error(error);
		message.channel.send(`There was an error while trying to reload command ${commandName}`);
	}

};