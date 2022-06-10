const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageAttachment } = require('discord.js');
const file = new MessageAttachment('files/undertale_text_box.gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('textbox')
		.setDescription('Tells you  textbox'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Yes',
							description: 'undertale',
							value: 'https://www.demirramon.com/generators/undertale_text_box_generator',
						},
						{
							label: 'No',
							description: 'k',
							value: 'alr then',
						},
						{
							label: 'Maybe',
							description: 'bruh',
							value: 'HMMMMMMMMMMMMMMMMMM?\n**Select `YES` OR `NO` FFS**',
						},
					]),
			);
		await interaction.reply({ content: 'wanna know how i did this', files: [file], components: [row] });
	},
};