const chalk = require('chalk');
const cmdLoad = require('../structure/loaders/commands-load');

module.exports = (client) => {
	console.log(chalk.bgCyan.bold('-------------------------------------------'));
	cmdLoad(client);
};