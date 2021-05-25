exports.config = {
	aliases: ['meow'],
	ownerOnly: true,
	guildOnly: true,
};
exports.run = (client, message) => {
	message.reply('Meow!').catch(console.error);
};