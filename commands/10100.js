const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/discordjs.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('10100')
		.setDescription('hacking'),
	async execute(interaction) {
		return interaction.reply({ content: '<:shotscared:858854376592506910> what the fuck hacker?!?!?!?!?!!\n\nhttps://developers.google.com/blockly', files: [file] });
	},
};
