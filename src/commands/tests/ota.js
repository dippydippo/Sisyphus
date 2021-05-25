exports.config = {
	ownerOnly: true,
};
exports.info = {
	name: 'Ota',
	category: 'tests',
	description: '--',
	usage: '',
};
exports.run = (client, message) => {
	message.delete();
	message.channel.send('Smh fuck you >:c <@!340666418372542464>');
};