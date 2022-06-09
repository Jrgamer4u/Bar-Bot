const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const file = new MessageAttachment('files/old-barbot-asset.png');
const file2 = new MessageAttachment('files/new-barbot-asset.png');
const file3 = new MessageAttachment('files/new-barbot-assetw.png');
const file4 = new MessageAttachment('files/barbot-levers.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('barbot-assets')
		.setDescription('youtubes and discord'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('BarBot Assets:')
			.setDescription('Old Asset')
			.setImage({ files: [file] });
		const embed2 = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('BarBot Assets:')
			.setDescription('Asset (Without Levers)')
			.setImage({ files: [file2] });
		const embed3 = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('BarBot Assets:')
			.setDescription('Asset (With Levers)')
			.setImage({ files: [file3] });
		const embed4 = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('BarBot Assets:')
			.setDescription('Levers')
			.setImage({ files: [file4] });
		await interaction.reply({ embed: [embed] });
		await interaction.followUp({ embed: [embed2] });
		await interaction.followUp({ embed: [embed3] });
		await interaction.followUp({ embed: [embed4] });
	},
};
