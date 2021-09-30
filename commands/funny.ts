import {Message} from 'discord.js';

module.exports = {
	name: 'funny',
	description: 'calculates the funny',
	execute(message: Message, args: String[]): void {
        var num = Math.floor(Math.random() * 100) + 1;
        var pinguser = message.mentions.users.first();

        if (pinguser === undefined) pinguser = message.author
        
        if(num == 100){
            message.channel.send(`${pinguser} IS ${num}% FUNNY! THE ULTIMATE FUNNY! HOLY SHIT!`);
        } else {
            message.channel.send(`${pinguser} is ${num}% funny!`);
        }
	},
};