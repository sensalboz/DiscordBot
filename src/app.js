const { Client } = require('discord.js')
require('dotenv').config()

const TOKEN = process.env.DISCORD_TOKEN_ID
const PREFIX = process.env.PREFIX

const client = new Client()

client.once('ready', () => {
	console.log(`this is a ${client.user.tag}`)
})

client.on('message', msg => {

	const { me, owner} = msg.guild; 


	if (msg.content.startsWith(`${PREFIX}test`)) {
		msg.channel.send('this is about aus ',me, owner)

		msg.
	}
})

client.login(TOKEN)
