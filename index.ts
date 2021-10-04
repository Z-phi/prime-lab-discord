import { Client, DiscordAPIError, Guild, Intents, Message, User } from 'discord.js';
import * as fs from 'fs';

const token = fs.readFileSync('token.txt').toString();

console.log('standby');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] },);

const prefix = "z "

client.on('ready', () => {
    console.log('ready!');
});

client.on("messageUpdate", m  => {
    //if (m.author.bot) return;
    m.channel.send("Uh ohhh an edit? Someone fucked uppppp");
})

client.on('messageCreate', m => {
    if (m.author.bot) return;

    if(m.content.toLowerCase().includes("tech deck")){
        m.reply('Tech Deck');
        m.channel.send('🛹');
        m.react('🛹');
    }

    if(m.content.startsWith(prefix)){
        var fullCommand = m.content.slice(prefix.length).split(" ")
        var command = fullCommand[0].toLowerCase();
        var args = fullCommand.shift();

        if(command == "cam") {
            setTimeout(() => {m.channel.send('...')}, 1000);
            setTimeout(() => {m.channel.send('Not funny.\n<https://youtu.be/ZazNbG_3m9A>')}, 4000);
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
        
        if(command == "owoned"){
            // Needs '' or whatever, I don't use this language
            // Yeah so what if this is basically a watermelon copy I'm still gonna make the pr and you can't stop me
            var pinguser = m.mentions.users.first();
            if (pinguser === undefined){
                pinguser = m.author
                m.channel.send('Hey ${pinguser}, you need to owon someone by pinging them.');
            } else {
                m.channel.send(`Hey ${pinguser}, you just got owoned.`);
            }
        }
    }
});



client.login(token);
