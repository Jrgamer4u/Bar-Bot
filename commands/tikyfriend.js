const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/tikyfriend.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tikyfriend')
		.setDescription('sometimes fnf people need to stop.'),
	async execute(interaction) {
		return interaction.reply({ content: 'Yknow what? Fuck you.\n\n\n**tikys your girlfriend**\n', files: [file] });
	},
};