const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/drawing-to-prof.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('drawing-to-prof')
		.setDescription('sends drawing to prof'),
	async execute(interaction) {
		await interaction.reply({ content: 'here prof <:yah:857776457987915786>', files: [file] });
	},
};