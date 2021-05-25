const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
	const commandFolders = fs.readdirSync('./src/commands');
	for (const folder of commandFolders) {
		const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
		for (const file of commandFiles) {
			const command = require(`../../commands/${folder}/${file}`);
			const commandName = file.split('.')[0];
			client.commands.set(commandName, command);
			console.log(chalk.underline.blue('Successfully loaded command:') + ` [${chalk.redBright.bold(commandName)}]`);
		}
	}

};