const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/that-dude.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('that-dude')
		.setDescription('simpson'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};