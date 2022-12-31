// Pong!
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription(
      "🏓 Check the connection between your bot and the Discord server."
    ),
  async execute(interaction,client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });
    const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`;
    await interaction.editReply({
        content: newMessage
    });

    return interaction.reply("Pong!");
  },
};
