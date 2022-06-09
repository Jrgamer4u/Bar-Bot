const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/shoe.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shoe')
		.setDescription('shoe'),
	async execute(interaction) {
		return interaction.reply({ content: 'heres your DAMN SHOEIE', files: [file] });
	},
};