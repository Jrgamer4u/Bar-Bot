const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/piss.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('piss')
		.setDescription('me when ~ when the ~ is when uh the ~'),
	async execute(interaction) {
		return interaction.reply({ content: "piss indeed, pisces", files: [file] });
	},
};