# Infyra ✨🚀

Infyra is a selfbot built with Discord.js v13, offering various features like avatar fetching and ping commands. It’s designed with a modular command and event handler system for easy expansion.

## Features

- **Command Handling**: Easily add and manage new commands in the `commands/` directory.
- **Alias Support**: Commands can have multiple aliases for flexibility.
- **User Avatar Fetching**: The `avatar` command can retrieve the avatar of a user, either by providing their ID or using the message author's own avatar.
- **Ping Command**: The `ping` command returns a "Pong!" reply, useful for checking if the bot is operational.
- **Configurable Prefix**: Customize the command prefix in `config.json`.
- **Allowed Users**: Only specific users (listed in `allowed.json`) are allowed to use the bot commands.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/pxldevv/Infyra.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Infyra
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `config.json` file and add your bot’s token and prefix. Example:

   ```json
   {
     "token": "YOUR_DISCORD_TOKEN",
     "prefix": "!"
   }
   ```

5. Add allowed users to the `allowed.json` file by including their user IDs. Example:

   ```json
   [
     "123456789012345678",
     "987654321098765432"
   ]
   ```

6. Run the bot:

   ```bash
   node app.js
   ```

## Project Structure

```
├── app.js              # Main bot file where the client is set up
├── commands            # Folder containing the command files
│   ├── avatar.js       # Avatar fetching command
│   └── ping.js         # Ping command
├── events              # Folder containing the event files
│   ├── messageCreate.js # Event handler for message creation
│   └── ready.js        # Event handler for bot ready event
├── allowed.json        # List of allowed user IDs for command access
├── config.json         # Bot configuration (token, prefix)
└── package.json        # Project metadata and dependencies
```

## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

## Contributing

Feel free to fork this repository and create pull requests to improve the bot. Contributions are welcome!
