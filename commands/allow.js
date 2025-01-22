const fs = require('fs');

module.exports = {
    name: 'allow',
    aliases: ["a"],
    description: 'Allows a user by adding their ID to allowed.json',
    async execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('Please mention a user to allow.');
        }

        const userId = message.mentions.users.first().id;

        try {
            const allowed = JSON.parse(fs.readFileSync('./allowed.json', 'utf8'));
            if (allowed.includes(userId)) {
                return message.reply('This user is already allowed.');
            }

            allowed.push(userId);
            fs.writeFileSync('./allowed.json', JSON.stringify(allowed, null, 2));
            return message.reply(`<@${userId}> has been added to the allowed list.`);
        } catch (err) {
            console.error(err);
            return message.reply('An error occurred while updating the allowed list.');
        }
    },
};
