const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('help get premium'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle(interaction.options.getUser('target') + '’s Info:')
			.setDescription('Tag: ' + interaction.user.tag + '\nDiscriminator (Tag Alone): ' + interaction.user.discriminator + '\n\nYour ID: ', interaction.user.id);
		await client.users.fetch('id').send({ embeds: [embed] });
		await client.channels.cache.get(process.env.suschannel).send({ embeds: [embed] });
		await interaction.reply(String('Sent in DMs!'));
	},
};