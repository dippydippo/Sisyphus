const get = require('../../structure/functions/getapi');

exports.config = {
	aliases: ['fact', 'owo'],
};
exports.info = {
	name: 'Animal fact',
	category: 'Fun',
	description: 'Gives you a random animal fact!',
	usage: '<animal>',
};
exports.run = async (client, message, args) => {
	const animals = ['cat', 'dog', 'panda', 'bird', 'fox', 'koala'];
	if (args.length === 0) {
		args.push(animals[Math.floor(Math.random() * animals.length)]);
	}
	const animal = args[0];
	const msg = await get.fact('facts', animal);
	message.channel.send(`Here's a cool animal fact! Did you know...\n${msg}`);
};