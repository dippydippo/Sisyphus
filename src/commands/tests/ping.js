exports.config = {
	aliases: ['test'],
	ownerOnly: true,
	guildOnly: true,
};
exports.info = {
	name: 'Ping!',
	category: 'Tests',
	description: 'Internal testing command. Also pings.',
	usage: '',
};
exports.run = (client, message) => {
	message.reply('Ping!').catch(console.error);
};