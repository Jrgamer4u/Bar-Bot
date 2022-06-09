const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/roast.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mega-roast')
		.setDescription('fr- from- from the movie- the movie gu-uy ... i-im shaking'),
	async execute(interaction) {
		return interaction.reply({ content: "sheesh...", files: [file] });
	},
};