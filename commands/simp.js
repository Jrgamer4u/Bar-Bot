const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/simp.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('simp')
		.setDescription('i’m gonna jitter'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};