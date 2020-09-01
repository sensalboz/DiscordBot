const { Client } = require('discord.js')
require('dotenv').config()

const TOKEN = process.env.DISCORD_TOKEN_ID
const PREFIX = process.env.PREFIX

const client = new Client()

client.once('ready', () => {
	console.log(`this is a ${client.user.tag}`)
})

client.on('message', message => {
	if (!message.content.startsWith(PREFIX) || message.author.bot) return
	const args = message.content.slice(PREFIX.length).trim().split(/ +/)

	const command = args.shift().toLowerCase()

	// console.log(command)

	if (command === 'help') {
		message.reply('this is a google')
	} else if (command === 'kick') {
		const taggedUser = message.mentions.users

		console.log(taggedUser)

		// message.channel.send(`thsis is agoogle tag${taggedUser.username}`)
	}
})

client.login(TOKEN)
