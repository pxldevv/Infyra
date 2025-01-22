module.exports = {
    name: 'avatar',
    aliases: ['av', 'profilepic'],
    description: 'Replies with the user\'s avatar URL!',
    async execute(message, args, client) {
        const userID = args[0]?.match(/\d+/)?.[0];
        let size = 256;

        const validSizes = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
        if (args[1] && validSizes.includes(Number(args[1]))) {
            size = Number(args[1]);
        }

        function getDefaultAvatarUrl(userID) {
            const userIdToUse = userID ? BigInt(userID) : 0n;
            const index = (userIdToUse >> 22n) % 6n;
            return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
        }

        if (userID) {
            try {
                const user = await client.users.fetch(userID);
                let avatarURL = user.avatarURL({ format: 'png', size: size });

                if (!avatarURL) {
                    const fallbackAvatar = getDefaultAvatarUrl(userID);
                    await message.reply(fallbackAvatar);
                } else {
                    if (avatarURL.startsWith('https://cdn.discordapp.com/avatars/') && avatarURL.includes('a_')) {
                        avatarURL = avatarURL.replace('.webp', '.gif');
                    }
                    avatarURL = `${avatarURL}`;
                    await message.reply(avatarURL);
                }
            } catch (error) {
                console.log('Error fetching user:', error);
            }
        } else {
            console.log('No valid user ID found');
        }
    },
};
