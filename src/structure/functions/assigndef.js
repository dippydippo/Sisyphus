/* eslint-disable no-unused-vars */
module.exports = (client, cmd) => {
	const defaults = {
		aliases: [],
		enabled: true,
		reqPerms: [],
		ownerOnly: false,
		guildOnly: false,
		minArgs: 0,
		acceptedArgs: null,
	};

	cmd.config = Object.assign({}, defaults, cmd.config);
	/* {} is the new target, default is source 1, cmd.config is source 2.
	do not remove the first {}, it needs the target to be an empty dictionary or it will overwrite defaults with the information from cmd.config
	meaning, it will work as intended once, but after that, the defaults will be changed until the process is restarted. */
};