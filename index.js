const Discord = require('discord.js');
const client = new Discord.Client();
const eventLoad = require('./src/structure/loaders/events-load');

// commands
client.commands = new Discord.Collection();

// events
eventLoad(client);

client.login(process.env.token);
