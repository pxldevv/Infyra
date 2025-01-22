const fs = require('fs');

module.exports = {
    name: 'prefix',
    aliases: ["pf"],
    description: 'Changes the bot prefix.',
    async execute(message, args) {
        const configPath = '../config.json';

        if (!args.length) {
            return message.channel.send(`The current prefix is: \`${require(configPath).prefix}\``);
        }

        const newPrefix = args[0];

        if (!newPrefix || newPrefix.length > 5) {
            return message.channel.send('Please provide a valid prefix (max 5 characters).');
        }

        const config = require(configPath);

        if (!config.owners.includes(message.author.id)) {
            return message.channel.send('You do not have permission to change the prefix.');
        }

        config.prefix = newPrefix;

        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

        return message.channel.send(`The bot prefix has been changed to: \`${newPrefix}\``);
    },
};
