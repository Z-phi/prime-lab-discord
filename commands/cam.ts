import {Message} from 'discord.js';

module.exports = {
	name: 'cam',
	description: 'cams command',
	execute(message: Message, args: String[]): void {
        console.log(args)
        message.channel.sendTyping();
        setTimeout(() => {message.channel.send('Not funny.')}, 4000);
	},
};