module.exports = {
    name: 'banner',
    aliases: ['b'],
    description: "Replies with the user's banner URL!",
    async execute(message, args, client) {
        try {
            const userID = args[0]?.match(/\d+/)?.[0] || message.author.id;

            const validSizes = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
            const size = validSizes.includes(Number(args[1])) ? Number(args[1]) : 4096;

            const user = await client.users.fetch(userID, { force: true });

            if (!user.banner) {
                return message.reply("This user doesn't have a banner.");
            }

            let bannerURL = user.bannerURL({ format: 'png', size });
            if (bannerURL.startsWith('https://cdn.discordapp.com/banners/') && bannerURL.includes('a_')) {
                bannerURL = bannerURL.replace('.png', '.gif');
            }

            await message.reply(bannerURL);
        } catch (error) {
            console.error('Error fetching user:', error);
            return message.reply('An error occurred while trying to fetch the user banner.');
        }
    },
};
