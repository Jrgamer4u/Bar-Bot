const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/pfp.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pfp')
		.setDescription('profile picture to Recovery Centre 2'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
