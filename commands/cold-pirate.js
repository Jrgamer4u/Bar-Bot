const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/cold-pirate.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cold-pirate')
		.setDescription('"brr"'),
	async execute(interaction) {
		return interaction.reply({ content: "**BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR**", files: [file] });
	},
};