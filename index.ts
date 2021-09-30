//const Discord = require('discord.js');
import {Client, Message, Intents, Collection} from 'discord.js';
import * as fs from 'fs';

const token = fs.readFileSync('token.txt').toString();

const prefix = 'z';

//balls
console.log('balls');

//setup command handler
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const commands = new Collection();

const cFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for(const f of cFiles) {
    const command = require(`./commands/${f}`);
    commands.set(command.name, command);
}

//when bot is ready
client.on('ready', () => {
    console.log('ready!');
});

//on new message
client.on('messageCreate',  (m: Message) => {
    if (m.author.bot) return;

        // TODO: move this
    if(m.content.toLowerCase().includes("tech deck")){
        m.channel.sendTyping();
        m.reply('Tech Deck');
        m.channel.send('🛹');
        m.react('🛹');
    }

    if(m.content.startsWith(prefix)){
        const args = m.content.slice(prefix.length).trim().split(/ +/);
        const command = args[0].toLowerCase() || "help";
        if(commands.has(command))
            /* @ts-ignore */ // TODO - fix this
            commands.get(command).execute(m, args);
        else
            console.log(command, 'not found')
    }

});

client.login(token);