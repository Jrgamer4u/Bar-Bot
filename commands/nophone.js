const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/nophone.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nophone')
		.setDescription('me rn'),
	async execute(interaction) {
		return interaction.reply({ content: "get ur epic nophone today!!!!!", files: [file] });
	},
};