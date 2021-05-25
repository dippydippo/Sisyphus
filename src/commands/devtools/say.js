exports.config = {
	path: __filename,
	ownerOnly: true,
};
exports.info = {
	name: 'Say',
	category: 'Devtools',
	description: 'Makes the bot say a thing, only usable by bot devs',
	usage: '<message>',
};
exports.run = (client, message, args, text) => {
	message.delete();
	message.channel.send(text);
};