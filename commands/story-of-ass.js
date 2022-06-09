const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const file = new MessageAttachment('files/ass1.png');
const file2 = new MessageAttachment('files/ass2.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('story-of-ass')
		.setDescription('Tells you Le Epic Story of Ass'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('Le Epic Story of Ass')
			.setDescription('Pictures by Objecty, Iron Bar.');
		const embed2 = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle('The End!')
			.setDescription('yeah molecule is gonna hunt ib down for this');
		await interaction.reply({ embeds: [embed] });
		await wait(2000);
        await interaction.followUp(String({ content: 'Once upon a time, there was a yellow ball, and a red ball.', files: [file] }));
        await wait(1000);
        await interaction.followUp(String('They were fuckin’ assholes to eachother, but one day, They woke up… COMBINED!!'));
        await wait(1000);
        await interaction.followUp(String('They kept struggling and struggling, until the red ball became very angry! So angry that he started to multiply into another red ball!'));
        await wait(1000);
        await interaction.followUp(String({ content: 'And then…\nTHE ALMIGHTY ASS WAS BORN!', files: [file2] }));
        await wait(1000);
		await interaction.reply({ embeds: [embed2] });
	},
};
