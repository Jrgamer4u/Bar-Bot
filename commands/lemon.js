const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/lemon.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lemon')
		.setDescription('demon'),
	async execute(interaction) {
		return interaction.reply({ content: '**lemon.**', files: [file] });
	},
};