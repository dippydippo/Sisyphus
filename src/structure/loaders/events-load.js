const chalk = require('chalk');
const fs = require('fs');

module.exports = (client) => {
	const eventFiles = fs.readdirSync('./src/events/').filter(file => file.endsWith('.js'));
	for (const file of eventFiles) {
		const event = require(`../../events/${file}`);
		const eventName = file.split('.')[0];
		console.log(chalk.underline.blue('Successfully loaded event:') + ` [${chalk.bold.yellow(eventName)}]`);
		client.on(eventName, event.bind(null, client));
		delete require.cache[require.resolve(`../../events/${file}`)];
	}
};
