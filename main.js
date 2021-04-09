const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '!';

var token = 'ODI5MzczMjY1MDA0NzI0MjM1.YG3MCw.fgTQ2oPT5d4EosfoKhJlnLtT_5U';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'simp'){
        client.commands.get('simp').execute(message, args, Discord);
    } else if (command === 'mm'){
        client.commands.get('mm').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command === 'sky'){
        client.commands.get('sky').execute(message, args, Discord);
    } else if (command === 'obama'){
        client.commands.get('obama').execute(message, args, Discord);
    }

})

client.login(token);