const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/card.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rrc')
		.setDescription('card'),
	async execute(interaction) {
		return interaction.reply({ content: 'Get Reversed <:lol:857776541727588362>', files: [file] });
	},
};
