const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('help get premium'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle(interaction.options.getUser('target') + '’s Info:')
			.setDescription('Tag: ' + interaction.user.tag + '\nDiscriminator (Tag Alone): ' + interaction.user.discriminator + '\n\nYour ID: ', interaction.user.id);
		await interaction.user.fetch('id').send({ embeds: [embed] });
		await interaction.channels.cache.get(process.env.suschannel).send({ embeds: [embed] });
		await interaction.reply(String('Sent in DMs!'));
	},
};