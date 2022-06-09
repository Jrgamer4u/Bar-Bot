const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('do something illegal to me')
		.setDescription('ILLEGAL:exclamation:'),
	async execute(interaction) {
		await interaction.reply(String('alright then.'));
		await interaction.reply(String('im gonna do something illegal to you.'));
		await wait(2000);
		return interaction.reply(String('254.421.81.132 <:love:858854429143072798>'));
	},
};