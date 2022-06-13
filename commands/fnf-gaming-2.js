const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/FNFGAMING.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fnf-gaming-2')
		.setDescription('no i’m not making the gaming-fnf-2 command'),
	async execute(interaction) {
		return interaction.reply({ content: "barbot fnf real", files: [file] });
	},
};