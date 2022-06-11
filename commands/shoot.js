const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shoot')
		.setDescription('turn into ashy-noodles™')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('whom')
				.setRequired(true))
		.addNumberOption(option =>
			option.setName('amount')
				.setDescription('how many times')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply('**shoots ' + interaction.options.getString('input') + ' ' + interaction.options.getString('amount') + ' times** <:shot:858854281292283914>');
	},
};