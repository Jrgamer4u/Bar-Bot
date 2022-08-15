const keepAlive = require("./server.js");
const { readdirSync } = require('fs');
const { Client, Collection, Intents, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const client2 = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageReactions], });
const Database = require("easy-json-database");
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const db = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database/db.json`)

client.commands = new Collection();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.on('ready', async () => {
	client.channels.cache.get(process.env.connected).send('yo im onlin');
	client.user.setActivity('/BB | Slash Commands!', { type: 'PLAYING' });
});

client2.once('ready', () => {
	console.log('Ready!');
});

keepAlive()

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'select') {
		await interaction.update({ content: interaction.values[0], components: [] });
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isModalSubmit()) return;
	const input = interaction.fields.getTextInputValue('Input');
	const type = interaction.customId;
	db.set(input, type);
});

client2.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'game-test2') {
		const message = await interaction.reply({ content: 'Reacting with letters', fetchReply: true });
		const emojiCharacters = require('../emojiCharacters.js');
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
					interaction.followUp('You reacted with A.');
				} else if (reaction.emoji.name === emojiCharacters.b) {
					interaction.followUp('You reacted with B.');
				} else if (reaction.emoji.name === emojiCharacters.c) {
					interaction.followUp('You reacted with C.');
				} else if (reaction.emoji.name === emojiCharacters.d) {
					interaction.followUp('You reacted with D.');
				} else if (reaction.emoji.name === emojiCharacters.e) {
					interaction.followUp('You reacted with E.');
				} else if (reaction.emoji.name === emojiCharacters.f) {
					interaction.followUp('You reacted with F.');
				} else {
					interaction.followUp('You reacted with G.');
				}
			})
			.catch(() => {
				interaction.followUp('Game Cancelled.');
			});
	}
});

client.login(process.env.token);
client2.login(process.env.token);