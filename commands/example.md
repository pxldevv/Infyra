# Example Command

```js
module.exports = {
    name: 'ping',
    aliases: ['pong', 'testping'],
    description: 'Replies with Pong!',
    async execute(message, args) {
        await message.reply('Pong!');
    },
};
```