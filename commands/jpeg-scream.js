const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/ironjpeg.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jpeg-scream')
		.setDescription('haha jpeg sucks'),
	async execute(interaction) {
		return interaction.reply({ content: 'help him he went jpeg and he cant undo it', files: [file] });
	},
};