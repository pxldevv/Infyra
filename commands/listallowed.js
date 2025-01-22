const fs = require('fs');

module.exports = {
    name: 'allowed',
    aliases: ["la"],
    description: 'Displays the list of allowed users with their usernames and IDs',
    async execute(message, args, client) {
        try {
            const allowedUsers = JSON.parse(fs.readFileSync('./allowed.json', 'utf8'));

            if (allowedUsers.length === 0) {
                return message.channel.send('The allowed list is currently empty.');
            }

            let userDetails = [];

            for (const userId of allowedUsers) {
                try {
                    const user = await client.users.fetch(userId);
                    userDetails.push(`${user.username} \`\`\`${user.id}\`\`\``);
                } catch (err) {
                    userDetails.push(`Could not fetch user with ID ${userId}`);
                }
            }

            if (userDetails.length === 0) {
                return message.channel.send('Could not retrieve any allowed users.');
            }

            message.channel.send(`Allowed users:\n${userDetails.join('\n')}`);
        } catch (err) {
            message.channel.send('An error occurred while retrieving the allowed users.');
        }
    },
};
