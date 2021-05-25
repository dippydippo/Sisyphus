exports.config = {
	ownerOnly: true,
};
exports.info = {
	name: 'Say',
	category: 'Utilities',
	description: '--',
	usage: '',
};
exports.run = (client, message, args, text) => {
	message.delete();
	message.channel.send(text);
};