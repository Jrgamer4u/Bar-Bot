const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/Barbot.webp');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('earthbound')
		.setDescription('barbot from earthbound'),
	async execute(interaction) {
		await interaction.followUp({ content: 'yes unfortunately.', files: [file] });
	},
};