module.exports = async (client, message) => {
    const { prefix, owners } = require('../config.json');
    const allowedUsers = require('../allowed.json');

    if (!message.content.startsWith(prefix) || !allowedUsers.includes(message.author.id) && !owners.includes(message.author.id)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

    if (!command) return;

    try {
        await command.execute(message, args, client);
    } catch (error) {
        console.error(`Error executing command ${commandName}:`, error);
        await message.reply('There was an error trying to execute that command.');
    }
};
