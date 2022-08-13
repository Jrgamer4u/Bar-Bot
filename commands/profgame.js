const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const file = new MessageAttachment('files/games/prof/title.png');
const file2 = new MessageAttachment('files/games/prof/screen1.png');
const file3 = new MessageAttachment('files/games/prof/screen2.png');
const file4 = new MessageAttachment('files/games/prof/screen3.png');
const file5 = new MessageAttachment('files/games/prof/screen4.png');
const file6 = new MessageAttachment('files/games/prof/screen5.png');
const file7 = new MessageAttachment('files/games/prof/screen6.png');
const file8 = new MessageAttachment('files/games/prof/screen7.png');
const file9 = new MessageAttachment('files/games/prof/screen8.png');
const file10 = new MessageAttachment('files/games/prof/screen9.png');
const file11 = new MessageAttachment('files/games/prof/screen10.png');
const file12 = new MessageAttachment('files/games/prof/screen11.png');
const file13 = new MessageAttachment('files/games/prof/screen12.png');
const file14 = new MessageAttachment('files/games/prof/screen13.png');
const file15 = new MessageAttachment('files/games/prof/screen14.png');
const file16 = new MessageAttachment('files/games/prof/screen15.png');
const file17 = new MessageAttachment('files/games/prof/screen16.png');
const file18 = new MessageAttachment('files/games/prof/screen17.png');
const file19 = new MessageAttachment('files/games/prof/screen18.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profgame')
		.setDescription('it professor’s game'),
	async execute(interaction) {
		await interaction.reply('Images are not changed for the change from replying with text to responding with emoji, when it says when to type something, react it with the emoji in instead.');
		await interaction.reply({ files: [file] });
		await interaction.reply({ files: [file2] });
		await wait(2000);
		await interaction.reply({ files: [file3], fetchReply: true });
		const message = await interaction.fetchReply();
		await message.react('🇦');
		await message.react('🇧');
		await message.react('🇨');
		await message.react('🇩');

		const filter = (reaction, user) => {
			return ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬'].includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		return interaction.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '🇦') {
					message.reply({ files: [file4] });
					message.reply({ files: [file5] });
				} else if (reaction.emoji.name === '🇧') {
					message.reply({ files: [file6] });
					message.reply({ files: [file7] });
				} else if (reaction.emoji.name === '🇨') {
					message.reply({ files: [file8] });
					message.reply({ files: [file9] });
				} else if (reaction.emoji.name === '🇩') {
					message.reply({ files: [file10] });
					message.reply({ files: [file11] });
				} else if (reaction.emoji.name === '🇪') {
					message.reply({ files: [file12] });
					message.reply({ files: [file13] });
				} else if (reaction.emoji.name === '🇫') {
					message.reply({ files: [file14] });
					message.reply({ files: [file15] });
				} else {
					message.reply({ files: [file16] });
					message.reply({ files: [file17] });
					message.reply({ files: [file18] });
					message.reply({ files: [file19] });
				}
			})
			.catch(collected => {
				message.reply('Game Cancelled.');
			});
	},
};