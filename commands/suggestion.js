const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("suggestion")
    .setDescription("give us suggestions"),
  async execute(interaction, client) {
    const modal = new Modal()
			.setCustomId("suggestions")
			.setTitle("Suggestions");
    const Input = new TextInputComponent()
      .setCustomId("Input")
      .setLabel("What’s Your Suggestion?")
      .setStyle("PARAGRAPH");
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