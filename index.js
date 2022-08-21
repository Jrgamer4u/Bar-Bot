const keepAlive = require("./server.js");
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, InteractionType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', async () => {
	client.channels.cache.get(process.env.connected).send('yo im onlin');
	client.user.setActivity('/BB | Slash Commands!');
});

keepAlive()

client.on('interactionCreate', async interaction => {
	if (!(interaction.type === InteractionType.ApplicationCommand)) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'select') {
		await interaction.update({ content: interaction.values[0], components: [] });
	}
});

client.on('interactionCreate', async interaction => {
	if (interaction.type !== InteractionType.ModalSubmit) return;
	const input = interaction.fields.getTextInputValue('Input');
	const type = interaction.customId;
	db.set(input, type);
});

client.login(process.env.token);
