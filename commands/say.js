const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('say stuff as BarBot')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('input what BarBot says')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(interaction.options.getString('input'));
	},
};
