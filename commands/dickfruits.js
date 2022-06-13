const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/dickfruit.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dickfruits')
		.setDescription('peepeevegetables')
		.addNumberOption(option =>
			option.setName('amount')
				.setDescription('How many poopies?')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(`**gives ${interaction.user.username} ${interaction.options.getString('amount')} dickfruits**`);
	},
};
