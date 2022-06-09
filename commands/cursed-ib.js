const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/faker-ib.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cursed-ib')
		.setDescription('faker fnf'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};