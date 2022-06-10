const keepAlive = require("./server.js");
const { readdirSync } = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

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
	const { commandName } = interaction;

	if (commandName === 'PREM***IB') {
		interaction.delete();
            (interaction.member).send({
                embed: {
                    title: '<:PREMIUM:858854477053689856> PREMIUM WINNER!',
                    color: '#ffcc00',
                    image: {
                        url: null
                    },

                    description: ('Congrats! You found the secret command in Barbot! You now get them Premium Role in our official server! <:yah:857776457987915786> \nIf you\'re not there yet: [Join.](https://discord.gg/asNTdR6vNm)\nIf youre not in the server and you found this command, take a screenshot of this DM and send it to ib.'),
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }

                }
            });
            (((client.guilds.cache.get('839170114536210442')).members.cache.get((interaction.author.id)) || await (client.guilds.cache.get('839170114536210442')).members.fetch((interaction.author.id)))).roles.add((Array.prototype.concat.apply([], client.guilds.cache.array().map((g) => g.roles.cache.array())).get('839265637099372546')));
        
	}

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(process.env.token);
