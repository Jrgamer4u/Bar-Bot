const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const user = interaction.options.getUser('target');

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
		await client.users.fetch('816911203036692511').send('<@user id> asks you: **' + interaction.options.getString('input') + '**\n\n**' + interaction.author.username + '**’s ID:\n\n' + interaction.author.id);
		await interaction.reply({ embeds: [embed] });
	},
};