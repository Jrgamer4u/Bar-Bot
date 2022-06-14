const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/print.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('print')
		.setDescription('print into uhhhm')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('What is the item i’m printing')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply({ content: `**prints ${interaction.options.getString('input')}**`, files: [file] });
	},
};
