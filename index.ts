import { Client, DiscordAPIError, Guild, Intents, User } from 'discord.js';
import * as fs from 'fs';

const token = fs.readFileSync('token.txt').toString();
console.log('balls');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', m => {
    if (m.author.bot) return;

    m.channel.sendTyping();
    m.reply('Tech Deck');
    m.channel.send('🛹');
    m.react('🛹');
});



client.login(token);