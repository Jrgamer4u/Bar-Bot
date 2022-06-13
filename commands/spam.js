const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spam')
		.setDescription('dont give a shit')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('wat u spam?')
				.setRequired(true))
		.addNumberOption(option =>
			option.setName('amount')
				.setDescription('How many added spams?')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply(interaction.options.getString('input'));
		for (var count = 0; count < interaction.options.getString('amount'); count++) {
			await interaction.followUp(interaction.options.getString('input'));
		}
	},
};
