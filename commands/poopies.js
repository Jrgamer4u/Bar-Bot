const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poopies')
		.setDescription('shit')
		.addNumberOption(option =>
			option.setName('amount')
				.setDescription('How many poopies?')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#33ccff')
			.setTitle(`<:yah:857776457987915786> Poopies Earned:`)
			.setDescription(`${interaction.options.getString('amount')}`);
		return interaction.reply({ embeds: [embed] });
	},
};
