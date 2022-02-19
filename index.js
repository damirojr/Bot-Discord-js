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
    if (message.content == 'facul'){
        message.reply('Você quis dizer? "Sofrimento?" :robot: https://desciclopedia.org/wiki/Faculdade ')
    }
    if (message.content == 'ads'){
        message.reply('Nosso Curso :heart: https://desciclopedia.org/wiki/An%C3%A1lise_e_desenvolvimento_de_sistemas ')
    }
    if (message.content == 'h!'){
        message.reply('Link do projeto digit: link\nFacul digite: "facul"\nPara ads digite: "ads"\nAjuda digite: "h!"')
    }
        
})

client.login(process.env.BOT_TOKEN)
