const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/brite-off.png');
const file2 = new MessageAttachment('files/brite-on.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brite')
		.setDescription('ow'),
	async execute(interaction) {
		await interaction.reply('Oh, so you don’t know what a Handy Brite is?');
		await interaction.followUp({ content: '**Well then. Allow me to demonstrate.**', files: [file] });
		await interaction.followUp({ content: '***WOOOOOOOOOHH***', files: [file2] });
	},
};