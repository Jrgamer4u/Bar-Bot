const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fuck')
		.setDescription('who the fuck are you and what did you do with the original person')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('whom')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply('<@user id> is fucking ' + interaction.options.getString('input') + '! i should probably leave…');
	},
};