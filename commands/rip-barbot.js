const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/barbot1-grave.png');
const file2 = new MessageAttachment('files/barbot2-grave.png');
const file3 = new MessageAttachment('files/barbot3-grave.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rip-barbot')
		.setDescription('look at gravestones'),
	async execute(interaction) {
		await interaction.reply({ files: [file] });
		await interaction.followUp('2021-2021');
		await interaction.followUp({ files: [file2] });
		await interaction.followUp('2021-2021');
		await interaction.followUp({ files: [file3] });
		await interaction.followUp('2022-2022');
		await interaction.followUp('how did this happen 3 times');
	},
};