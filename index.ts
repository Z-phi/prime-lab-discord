import { Client, DiscordAPIError, Guild, Intents, User } from 'discord.js';
import * as fs from 'fs';

const token = fs.readFileSync('token.txt').toString();

console.log('balls');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] },);

const prefix = "z "

client.on('ready', () => {
    console.log('ready!');
});

client.on('messageCreate', m => {
    if (m.author.bot) return;

    if(m.content.toLowerCase().includes("tech deck")){
        m.channel.sendTyping();
        m.reply('Tech Deck');
        m.channel.send('🛹');
        m.react('🛹');
    }

    if(m.content.startsWith(prefix)){
        var fullCommand = m.content.slice(prefix.length).split(" ")
        var command = fullCommand[0].toLowerCase();
        var args = fullCommand.shift();

        if(command == "cam") {
            m.channel.sendTyping();
            setTimeout(() => {m.channel.send('Not funny.\nhttps://youtu.be/ZazNbG_3m9A')}, 4000);
        }
        if(command == "help"){
            m.channel.send(`**Prefix:** \`${prefix}\`\n**Commands:** \`cam, funny [@user], watermelon [@user]\``)
        }

        if(command == "funny"){
            var num = Math.floor(Math.random() * 100) + 1;
            var pinguser = m.mentions.users.first();
            if (pinguser === undefined) pinguser = m.author
            if(num == 100){
                m.channel.send(`${pinguser} IS ${num}% FUNNY! THE ULTIMATE FUNNY! HOLY SHIT!`);
            } else if(num == 1){
                m.channel.send(`${pinguser} is ${num}% funny...       wow.`);
            } else { 
                m.channel.send(`${pinguser} is ${num}% funny!`);
            }
        }
        
        if(command == "watermelon"){
            var pinguser = m.mentions.users.first();
            if (pinguser === undefined){
                pinguser = m.author
                m.channel.send('${pinguser} YOU JUST 🍉WATERMELONED🍉 YOURSELF, DINGUS! PING SOMEONE NEXT TIME!');
            } else {
                m.channel.send(`${pinguser} YOU JUST GOT 🍉WATERMELONED🍉!`);
            }
        }
    }
});



client.login(token);
