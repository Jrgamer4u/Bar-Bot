const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/fredy.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fredy')
		.setDescription('real'),
	async execute(interaction) {
		return interaction.reply({ content: "fredy -u-", files: [file] });
	},
};