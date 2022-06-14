const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/shmoo.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shmoo')
		.setDescription('not mipmachine ex'),
	async execute(interaction) {
		return interaction.reply({ content: "SHMOOOOOOOOOOOOOOOOOOOOOO", files: [file] });
	},
};