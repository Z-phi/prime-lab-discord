import { Client, DiscordAPIError, Guild, Intents, User } from 'discord.js';
import * as fs from 'fs';

const token = fs.readFileSync('token.txt').toString();

console.log('balls');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] },);

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', m => {
    if (m.author.bot) return;
    if(m.content.toLowerCase().includes("tech deck")){
        m.channel.sendTyping();
        m.reply('Tech Deck');
        m.channel.send('🛹');
        m.react('🛹');
    }
    if(m.content.toLowerCase().includes("z cam")){
        m.channel.sendTyping();
        m.channel.send('Not funny.');
    }
    if(m.content.toLowerCase().includes("z help")){
        m.channel.send('**Prefix:** z\n**Commands:** cam\n         funny')
    }
    if(m.content.toLowerCase().includes("z funny ")){
        var num = Math.floor(Math.random() * 100) + 1;
        var pinguser = m.mentions.users.first();
        if (pinguser === undefined) {
            m.reply('Please tag a user.');
        }
        else {
                m.channel.send(`${pinguser} is ${num}% funny!`);
        }
        m.channel.send(`${num}`);
    }

});



client.login(token);