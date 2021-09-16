const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Répondre avec Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
