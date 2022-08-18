const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('images/asset.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('asset')
		.setDescription('asset to Recovery Centre 2'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
