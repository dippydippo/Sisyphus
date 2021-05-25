exports.config = {
	ownerOnly: true,
	minArgs: 2,
	aliases: ['setstatus', 'botstat'],
};
exports.run = (client, message, args, text) => {
	const Nargs = text.split(', ');
	try {
		client.user.setActivity(Nargs[0], { type: Nargs[1].toUpperCase() });
	}
	catch (error) {
		message.reply(`**[ERROR]** ${error}`);
	}
};