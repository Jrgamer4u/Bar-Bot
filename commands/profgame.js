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
		await interaction.followUp({ files: [file] });
		await interaction.followUp({ files: [file2] });
		await wait(2000);
		await interaction.followUp({ files: [file3] });
		await interaction.react('🇦').then(() => interaction.react('🇧').then(() => interaction.react('🇨').then(() => interaction.react('🇩'))));

		const filter = (reaction, user) => {
			return ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬'].includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		return interaction.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '🇦') {
					interaction.followUp({ files: [file4] });
					interaction.followUp({ files: [file5] });
				} else if (reaction.emoji.name === '🇧') {
					interaction.followUp({ files: [file6] });
					interaction.followUp({ files: [file7] });
				} else if (reaction.emoji.name === '🇨') {
					interaction.followUp({ files: [file8] });
					interaction.followUp({ files: [file9] });
				} else if (reaction.emoji.name === '🇩') {
					interaction.followUp({ files: [file10] });
					interaction.followUp({ files: [file11] });
				} else if (reaction.emoji.name === '🇪') {
					interaction.followUp({ files: [file12] });
					interaction.followUp({ files: [file13] });
				} else if (reaction.emoji.name === '🇫') {
					interaction.followUp({ files: [file14] });
					interaction.followUp({ files: [file15] });
				} else {
					interaction.followUp({ files: [file16] });
					await wait(2000);
					interaction.followUp({ files: [file17] });
					await wait(2000);
					interaction.followUp({ files: [file18] });
					await wait(2000);
					interaction.followUp({ files: [file19] });
				}
			})
			.catch(collected => {
				interaction.reply('Game Cancelled.');
			});
	},
};