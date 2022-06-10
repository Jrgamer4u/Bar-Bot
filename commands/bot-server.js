const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-server')
		.setDescription('discord for the bots'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('Channels')
			.setDescription('[JOIN NOW!!!!!!!!!!!!!!!](https://discord.gg/9XsDgVw3Aa)');
		return interaction.reply({ embeds: [embed] });
	},
};
