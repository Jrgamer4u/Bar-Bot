const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channelinfo')
		.setDescription('help get premium'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle(`${interaction.guild.name}’s Info:`)
			.setDescription(`Owned by: ${interaction.guild.fetchOwner().user.tag}\nOwner Discriminator (Tag Alone): ${interaction.guild.fetchOwner().user.discriminator}\n\nCurrent Member Count: ${interaction.guild.memberCount}\n\nCurrent Boost Level: ${interaction.guild.premiumTier}\n\nServer ID: ${interaction.guild.id}`);
		await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};