const fs = require('fs');

module.exports = {
    name: 'disallow',
    aliases: ["da"],
    description: 'Disallows a user by removing their ID from allowed.json',
    async execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('Please mention a user to disallow.');
        }

        const userId = message.mentions.users.first().id;

        try {
            const allowed = JSON.parse(fs.readFileSync('./allowed.json', 'utf8'));
            if (!allowed.includes(userId)) {
                return message.reply('This user is not on the allowed list.');
            }

            const updated = allowed.filter(id => id !== userId);
            fs.writeFileSync('./allowed.json', JSON.stringify(updated, null, 2));
            return message.reply(`<@${userId}> has been removed from the allowed list.`);
        } catch (err) {
            console.error(err);
            return message.reply('An error occurred while updating the allowed list.');
        }
    },
};
