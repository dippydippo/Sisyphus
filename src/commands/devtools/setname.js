exports.config = {
	path: __filename,
	ownerOnly: true,
};
exports.info = {
	name: 'Set Name',
	description: 'Sets the bots username, only usable by devs',
	category: 'Devtools',
	usage: '<name>',
};
exports.run = (client, message, args, text) => {
	try {
		client.user.setUsername(text);
	}
	catch (error) {
		message.reply(`**[ERROR]** ${error}`);
	}
};