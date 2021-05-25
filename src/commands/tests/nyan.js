exports.config = {
	path: __filename,
	aliases: ['meow'],
	ownerOnly: true,
	guildOnly: true,
};
exports.info = {
	name: 'nyan',
	description: 'Meow',
	category: 'Tests',
	usage: '',
};
exports.run = (client, message) => {
	message.reply('Meow!').catch(console.error);
};