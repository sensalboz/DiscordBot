require('dotenv').config()

const TOKEN = process.env.DISCORD_TOKEN_ID

const { Client } = require('discord.js')

const client = new Client()

client.on('ready', () => {
	console.log(`this is a ${client.user.tag}`)
})

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong')
	}
})

client.login(TOKEN)
