exports.config = {
	path: __filename,
	ownerOnly: true,
};
exports.info = {
	name: 'Set Avatar',
	description: 'Sets the bot avatar, only usable by devs',
	category: 'Devtools',
	usage: '',
};
exports.run = (client, message) => {
	try {
		message.channel.send('Please provide a picture or a picture url.').then(() => {
			const reg = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
			const filter = m => message.author.id === m.author.id && (message.attachments || message.content == reg);
			message.channel.awaitMessages(filter, { time: 15000, max: 1, errors: ['time'] }).then(collected => {
				console.log(collected.first().content);
				if(collected.first().content == '') {
					const newAv = collected.first().attachments.first().url;
					message.client.user.setAvatar(newAv);
					message.channel.send('You have successfully changed the bots avatar.');
				}
				else{
					const newAv = collected.first().content;
					message.client.user.setAvatar(newAv);
					message.channel.send('You have successfully changed the bots avatar.');
				}
			});
		});
	}
	catch (error) {
		message.reply(`**[ERROR]** ${error}`);
	}
};