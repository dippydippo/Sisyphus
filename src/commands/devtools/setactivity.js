exports.config = {
	path: __filename,
	ownerOnly: true,
	minArgs: 2,
	aliases: ['setstatus', 'botstat'],
};
exports.info = {
	name: 'Set Activity',
	description: 'Sets the bots activity to a thing you want, only usable by devs',
	category: 'Devtools',
	usage: '<status mesage>, <type of status>',
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