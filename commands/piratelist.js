const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('piratelist')
		.setDescription('yar'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('The Pirate List')
			.setDescription('Pirate #1: Onigiri Animations / Pirates BFDI/BFB Characters\nwatch out for more pirates! <:yah:857776457987915786>');
		return interaction.reply({ embeds: [embed] });
	},
};
