const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, InteractionType, GatewayIntentBits } = require('discord.js');
const Database = require("easy-json-database");
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const db = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (interaction.type === InteractionType.ApplicationCommand){
			const command = client.commands.get(interaction.commandName);

			if (!command) return;

			try {
				command.execute(interaction);
			} catch (error) {
				console.error(error);
				interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}

		if (interaction.isSelectMenu()){
			if (interaction.customId === 'select') {
				interaction.update({ content: interaction.values[0], components: [] });
			}
		}

		if (interaction.type === InteractionType.ModalSubmit){
			const input = interaction.fields.getTextInputValue('Input');
			const type = interaction.customId;
			db.set(input, type);
		}
	},
};