const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bobuc')
		.setDescription('give bobucs')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('How much bobuc do you want?')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('<:yah:857776457987915786>  Bobux Recieved:')
			.setDescription(interaction.options.getString('input'));
		return interaction.reply({ embeds: [embed] });
	},
};
