module.exports = {
    name: 'ping',
    aliases: ['p'],
    description: 'Replies with Pong!',
    async execute(message, args) {
        await message.reply('Pong!');
    },
};
