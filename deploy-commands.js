const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require('fs');

const commands = [];
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const commands2 = [
	new SlashCommandBuilder().setName('game-test2').setDescription('another goddamn test yipee'),
]
	.map(command => command.toJSON());


const rest = new REST({ version: '9' }).setToken(process.env.token);

const rest2 = new REST({ version: '10' }).setToken(process.env.token);

rest2.put(Routes.applicationGuildCommands(process.env.clientId), { body: commands2 })
	.then(() => console.log('Successfully registered application commands. (batch 1)'))
	.catch(console.error);

(async () => {
	try {
		console.log('Started refreshing application (/) commands. (batch 2)');

		await rest.put(
			Routes.applicationCommands(process.env.clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands. (batch 2)');
	} catch (error) {
		console.error(error);
	}
})();
