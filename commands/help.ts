import {Message} from 'discord.js';

module.exports = {
    name: "help",
    description: "gets help",
    execute(message: Message, args: String[]): void {
        //TODO - hardcoded prefix should be imported from a config file
        message.channel.send(`**Prefix:** \`z\`\n**Commands:** \`cam, funny [@user]\``)
    }
}