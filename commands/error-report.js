const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('error-report')
		.setDescription('report us errors'),
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

		client.on('interactionCreate', interaction => {
			if (!interaction.isModalSubmit()) return;
			const input = interaction.fields.getTextInputValue('Input');
			const type = interaction.customId
			db.set(input, type);
		});

		await modalSubmit.reply('thank you.');
	},
};