const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask-ibby')
		.setDescription('to the ibbster')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('What is your question to ibby?')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('Question sent! You asked:')
			.setDescription(interaction.options.getString('input') + '\n\nMake sure to have your DMs open + or have IB unblocked for you to get your answer!')
		await interaction.user.fetch('816911203036692511').send('<@' + interaction.user.id + '> asks you: **' + interaction.options.getString('input') + '**\n\n**' + interaction.user.username + '**’s ID:\n\n' + interaction.user.id);
		await interaction.reply({ embeds: [embed] });
	},
};