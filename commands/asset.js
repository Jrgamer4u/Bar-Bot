const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/asset.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('asset')
		.setDescription('asset to Recovery Centre 2'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
