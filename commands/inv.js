const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inv')
		.setDescription('invites more bots'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('<:yah:857776457987915786> Here!')
			.setDescription('Invite is above the About Me under the bot Profile.\n[To invite my other bot buddies, Click this link](https://bariron294.wixsite.com/addibbot)');
		return interaction.reply({ embeds: [embed] });
	},
};
