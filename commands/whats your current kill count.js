const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whats your current kill count')
		.setDescription('tells you'),
	async execute(interaction) {
		return interaction.reply("more than you :sunglasses: <:lol:857776541727588362>");
	},
};
