const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/cat.jpeg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('from five nights at funkin'),
	async execute(interaction) {
		return interaction.reply({ content: "REAL!!!", files: [file] });
	},
};