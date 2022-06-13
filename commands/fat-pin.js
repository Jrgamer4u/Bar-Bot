const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/fat-pin.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fat-pin')
		.setDescription('from bfdfi real'),
	async execute(interaction) {
		return interaction.reply({ content: "fat pin", files: [file] });
	},
};