const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('error-report')
		.setDescription('PROBLEMATIC: report us errors'),
	async execute(interaction) {
		const modal = new Modal()
			.setCustomId('error-report')
			.setTitle('Error Report');
		const Input = new TextInputComponent()
			.setCustomId('Input')
			.setLabel("What’s Your Error with this bot?")
			.setStyle('PARAGRAPH');
		const firstActionRow = new MessageActionRow().addComponents(Input);
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	},
};