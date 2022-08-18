const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('invite link for bot'),
	async execute(interaction) {
		return interaction.reply("https://discord.com/api/oauth2/authorize?client_id=984181208571334656&permissions=8&scope=bot%20applications.commands");
	},
};
