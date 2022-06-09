const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/madness.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('show-madness')
		.setDescription('MADNESS!'),
	async execute(interaction) {
		return interaction.reply({ content: 'YE WANT MADNESS? ILL GIVE YE MADNESS!', files: [file] });
	},
};
