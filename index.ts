import { Client, Intents } from 'discord.js';
import * as fs from 'fs';

const token = fs.readFileSync('token.txt').toString();
console.log(token);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', m => {
    if (m.author.bot) return;

    m.channel.send('Tech Deck');
    m.channel.send('🛹');
    m.react('🛹');
});

client.login(token);