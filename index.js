const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const config = require('./alive.js');
const client = new Discord.Client();

//
client.login(token);
//Logs to console that bot is ready and online
client.once('ready', () => {
	console.log('Ready!');
});
//Stuff that shows up in discord
client.on('ready', () => {
	client.user.setPresence({
			//Shows that the bot is online
			"status": "online",
			//Makes it where the bot cannot be AFK
			"afk": false,
			//The "game" the bot is playing...
			"game": {
				"name": "Use " + prefix + "help  for help!"
			}
		})
		.then(console.log("Bot ready."));
	configSetup();
})

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	}
});

