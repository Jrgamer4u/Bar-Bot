const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/cringe1.png');
const file2 = new MessageAttachment('files/cringe2.png');
const file3 = new MessageAttachment('files/cringe3.png');
const file4 = new MessageAttachment('files/cringe4.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cringe')
		.setDescription('look at cringe images'),
	async execute(interaction) {
		await interaction.reply({ files: [file] });
		await interaction.followUp({ files: [file2] });
		await interaction.followUp({ files: [file3] });
		await interaction.followUp({ files: [file4] });
		await interaction.followUp('CRINGE');
	},
};