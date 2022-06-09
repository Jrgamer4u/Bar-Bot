const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coded-with')
		.setDescription('barbot tells you what they were coded with'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('With Discord.js, of course! <:yah:857776457987915786> ')
			.setDescription('https://discord.js.org/#/')
		return interaction.reply({ embeds: [embed] });
	},
};
