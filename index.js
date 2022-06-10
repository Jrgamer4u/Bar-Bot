const keepAlive = require("./server.js");
const { readdirSync } = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
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
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'select') {
		await interaction.update({ content: interaction.values[0], components: [] });
	}
});

client.on('interactionCreate', interaction => {
	if (!interaction.isModalSubmit()) return;
	const input = interaction.fields.getTextInputValue('Input');
	const type = interaction.fields.customId
	console.log({ type, input });
	db.set(input, type);
});

client.login(process.env.token);
