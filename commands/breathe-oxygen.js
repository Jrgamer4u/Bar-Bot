const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('breathe-oxygen')
		.setDescription('omg'),
	async execute(interaction) {
		await interaction.reply('**breathes oxygen somehow**');
	},
};