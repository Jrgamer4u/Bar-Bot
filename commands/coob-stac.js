const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/coob-stac.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coob-stac')
		.setDescription('coobs'),
	async execute(interaction) {
		return interaction.reply({ content: "we cant beat it, its too powerful.", files: [file] });
	},
};