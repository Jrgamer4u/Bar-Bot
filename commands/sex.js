const { userMention, SlashCommandBuilder } = require('@discordjs/builders');
const user = userMention('746858751801163887');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sex')
		.setDescription('nice'),
	async execute(interaction) {
		return interaction.reply(`**fucks <@${user}> cutely** <:love:858854429143072798>`);
	},
};
