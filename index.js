const keepAlive = require("./server.js");
const { readdirSync } = require('fs');
const { Client, Collection, Intents, MessageAttachment, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] });
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
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'profgame') {
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
		const message = await interaction.reply({ content: 'Images are not changed for the change from replying with text to responding with emoji, when it says when to type something, react it with the emoji below instead.', files: [file, file2, file3], fetchReply: true });
		message.react('🇦')
			.then(() => message.react('🇧'))
			.then(() => message.react('🇨'))
			.then(() => message.react('🇩'))
			.catch(error => console.error('One of the emojis failed to react:', error));

		const filter = (reaction, user) => {
			return ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬'].includes(reaction.emoji.name) && user.id === interaction.user.id;
		};

		message.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '🇦') {
					message.reply({ files: [file4, file5] });
				} else if (reaction.emoji.name === '🇧') {
					message.reply({ files: [file6, file7] });
				} else if (reaction.emoji.name === '🇨') {
					message.reply({ files: [file8, file9] });
				} else if (reaction.emoji.name === '🇩') {
					message.reply({ files: [file10, file11] });
				} else if (reaction.emoji.name === '🇪') {
					message.reply({ files: [file12, file13] });
				} else if (reaction.emoji.name === '🇫') {
					message.reply({ files: [file14, file15] });
				} else {
					message.reply({ files: [file16, file17, file18, file19] });
				}
			})
			.catch(collected => {
				message.reply('Game Cancelled…');
			});
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

client.login(process.env.token);
