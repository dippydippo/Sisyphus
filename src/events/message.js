const commandHandler = require('../structure/handlers/command-handler');

module.exports = (client, message) => {
	commandHandler(client, message);
};