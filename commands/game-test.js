const { SlashCommandBuilder } = require('@discordjs/builders');
const emojiCharacters = require('../emojiCharacters.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game-test')
		.setDescription('testing this'),
	async execute(interaction) {
		const message = await interaction.reply({ content: 'Reacting with letters', fetchReply: true });
		message.react(emojiCharacters.a)
			.then(() => message.react(emojiCharacters.b))
			.then(() => message.react(emojiCharacters.c))
			.then(() => message.react(emojiCharacters.d))
			.catch(error => console.error('One of the emojis failed to react:', error));

		const filter = (reaction, user) => {
			return [emojiCharacters.a, emojiCharacters.b, emojiCharacters.c, emojiCharacters.d, emojiCharacters.e, emojiCharacters.f, emojiCharacters.g].includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		message.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === emojiCharacters.a) {
					message.reply('You reacted with A.');
				} else if (reaction.emoji.name === emojiCharacters.b) {
					message.reply('You reacted with B.');
				} else if (reaction.emoji.name === emojiCharacters.c) {
					message.reply('You reacted with C.');
				} else if (reaction.emoji.name === emojiCharacters.d) {
					message.reply('You reacted with D.');
				} else if (reaction.emoji.name === emojiCharacters.e) {
					message.reply('You reacted with E.');
				} else if (reaction.emoji.name === emojiCharacters.f) {
					message.reply('You reacted with F.');
				} else {
					message.reply('You reacted with G.');
				}
			})
			.catch(collected => {
				message.reply('Game Cancelled.');
			});
	},
};