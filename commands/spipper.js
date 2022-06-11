const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/spipper.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spipper')
		.setDescription('from i wanna be the guy'),
	async execute(interaction) {
		return interaction.reply({ content: "THE SPIPPER HAS APPROACHED!!", files: [file] });
	},
};