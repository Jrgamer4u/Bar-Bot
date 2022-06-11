const { SlashCommandBuilder } = require('@discordjs/builders');
const user = interaction.options.getUser('target');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('who you kissin hmmm')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('whom')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply('<@user id> kissed ' + interaction.options.getString('input') + '! Wow, they sure are a cute couple…');
	},
};
