const { Client, Collection } = require('discord.js-selfbot-v13');
const fs = require('fs');
const { token, prefix } = require('./config.json');
const allowedUsers = require('./allowed.json');

const client = new Client();
client.commands = new Collection();
client.aliases = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    if (command.aliases) {
        for (const alias of command.aliases) {
            client.aliases.set(alias, command.name);
        }
    }
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const eventName = file.split('.')[0];
    const eventHandler = require(`./events/${file}`);
    client.on(eventName, eventHandler.bind(null, client));
}

client.login(token);