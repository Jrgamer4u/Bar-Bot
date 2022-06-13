const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/FNFGAMING2.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fnf-gaming-3')
		.setDescription('no i’m not making the gaming-fnf-3 command'),
	async execute(interaction) {
		return interaction.reply({ content: "fb fnf real", files: [file] });
	},
};