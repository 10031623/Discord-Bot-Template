const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//const config = require('./alive.js'); //only for people that are using repl.it
const client = new Discord.Client();

//Stuff that shows up in discord
client.on('ready', () => {
	client.user.setPresence({
			//Makes it where the bot cannot be AFK
			"afk": false,
			//The "game" the bot is playing...
			"game": {
				"name": "Use " + prefix + "help  for help!"
			}
		})
    console.log('Presence Set!');
});
//Sends message in console to show that it is ready
client.once('ready', () => {
	console.log('Ready!');
});
//COMMANDS
//DISCORD TEMPLATE
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});

//Bot Login
client.login(token);
