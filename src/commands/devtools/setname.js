exports.config = {
	ownerOnly: true,
};
exports.run = (client, message, args, text) => {
	try {
		client.user.setUsername(text);
	}
	catch (error) {
		message.reply(`**[ERROR]** ${error}`);
	}
};