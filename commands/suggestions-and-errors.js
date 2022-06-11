const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestions-and-errors')
		.setDescription('undiscord the bots'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('Channels')
			.setDescription('[can do it through github, account needed](https://github.com/Jrgamer4u/Bar-Bot/issues/new) or dm jrgamer4u ig');
		return interaction.reply({ embeds: [embed] });
	},
};
