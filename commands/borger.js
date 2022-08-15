const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/borger.jpg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('borger')
		.setDescription('from mother 3'),
	async execute(interaction) {
		return interaction.reply({ content: "ib ned borger", files: [file] });
	},
};