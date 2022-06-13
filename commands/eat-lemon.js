const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const file = new MessageAttachment('files/lemon.png');
const file2 = new MessageAttachment('files/lemon2.png');
const file3 = new MessageAttachment('files/lemon3.png');
const file4 = new MessageAttachment('files/lemon4.png');
const file5 = new MessageAttachment('files/lemon5.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eat-lemon')
		.setDescription('eat the big lemon'),
	async execute(interaction) {
		await interaction.reply({ content: '**lemo-** …', files: [file] });
		await interaction.followUp('…');
		await wait(1000);
		await interaction.followUp({ files: [file2] });
		await wait(1000);
		await interaction.followUp({ files: [file3] });
		await wait(1000);
		await interaction.followUp({ files: [file4] });
		await wait(1000);
		await interaction.followUp({ files: [file5] });
	},
};