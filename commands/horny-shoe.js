const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/crocs.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horny-shoe')
		.setDescription('show me'),
	async execute(interaction) {
		return interaction.reply({ content: "I shoed the show…", files: [file] });
	},
};