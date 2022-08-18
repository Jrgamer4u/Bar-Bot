const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('decover')
		.setDescription('decovers a person')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Enter the person who gets decovered')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#999999')
			.setTitle('Decovered:')
			.setDescription(interaction.options.getString('input'));
		return interaction.reply({ embeds: [embed] });
	},
};
