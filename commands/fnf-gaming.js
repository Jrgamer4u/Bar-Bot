const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/broke.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fnf-gaming')
		.setDescription('no i’m not making the gaming-fnf command'),
	async execute(interaction) {
		return interaction.reply({ content: "fnf mods in a nutshell", files: [file] });
	},
};