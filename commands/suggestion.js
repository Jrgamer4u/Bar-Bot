const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestion')
		.setDescription('give us suggestions'),
	async execute(interaction) {
		const modal = new Modal()
			.setCustomId('suggestions')
			.setTitle('Suggestions');
		const Input = new TextInputComponent()
			.setCustomId('Input')
			.setLabel("What’s Your Suggestion?")
			.setStyle('PARAGRAPH');
		const firstActionRow = new MessageActionRow().addComponents(Input);
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	},
};