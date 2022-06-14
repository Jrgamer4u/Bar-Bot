const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/image0 (36).png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dick')
		.setDescription('ib dick real!'),
	async execute(interaction) {
		return interaction.reply({ content: 'guys look real', files: [file] });
	},
};