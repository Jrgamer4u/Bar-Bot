const { SlashCommandBuilder } = require('@discordjs/builders');
const file = new MessageAttachment('files/demoman.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('demoman-tricky')
		.setDescription('fnf'),
	async execute(interaction) {
		return interaction.reply({ content: "HOLY SHIT GUYS ITS TRICKY LOOK", files: [file] });
	},
};