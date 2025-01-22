module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Lists all available commands with their descriptions and aliases',
    async execute(message, args, client) {
        const commandList = client.commands.map(command => {
            const aliases = command.aliases.length ? `(${command.aliases.join(', ')})` : '';
            return `**${command.name}** \`${aliases}\` - \`${command.description}\``;
        });

        if (commandList.length === 0) {
            return message.channel.send('No commands are available.');
        }

        message.channel.send(`### Here are all the available commands:\n\n${commandList.join('\n')}`);
    },
};
