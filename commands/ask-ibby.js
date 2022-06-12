const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask-ibby')
		.setDescription('to the ibbster'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('just ask in ibby’s dms')
			.setDescription('lmao');
		return interaction.reply({ embeds: [embed] });
	},
};