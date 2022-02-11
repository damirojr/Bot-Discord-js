require('dotenv').config()

const { Message } = require('discord.js')
const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

client.once('ready', function(){
    console.log('TAMO ON')
})

client.on('message', function(message){
    if (message.content == 'link'){
        message.reply("Salve turminha \nBot Bert na área!!! \nClique aqui e veja o projeto https://github.com/damirojr/Bot-js")
    
    }
        
})

client.login(process.env.BOT_TOKEN)