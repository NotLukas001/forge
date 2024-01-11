const { commandHandler, automodHandler, statsHandler } = require("@src/handlers");
const { PREFIX_COMMANDS } = require("@root/config");
const { getSettings } = require("@schemas/Guild");

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').Message} message
 */
module.exports = async (client, message) => {
  if (!message.guild || message.author.bot) return;
  const settings = await getSettings(message.guild);

  // Command handler
  let isCommand = false;

  if (PREFIX_COMMANDS.ENABLED) {
    if (message.content.includes(client.user.id)) {
      try {
        // Mengirim pesan teks yang menjelaskan prefix bot
        await message.channel.send(`> Hello! My prefix this server is \`${settings.prefix}\`\n> Enjoy, Let us know if you have any queries!`);
      } catch (error) {
        console.error("Error sending bot mention message:", error);
      }
    }

    if (message.content.startsWith(settings.prefix)) {
      const invoke = message.content.replace(settings.prefix, "").split(/\s+/)[0];
      const cmd = client.getCommand(invoke);
      if (cmd) {
        isCommand = true;
        try {
          await commandHandler.handlePrefixCommand(message, cmd, settings);
        } catch (error) {
          console.error("Error handling prefix command:", error);
        }
      }
    }
  }

  // Stats handler
  if (settings.stats.enabled) {
    try {
      await statsHandler.trackMessageStats(message, isCommand, settings);
    } catch (error) {
      console.error("Error tracking message stats:", error);
    }
  }

  // If not a command, perform automod
  if (!isCommand) {
    try {
      await automodHandler.performAutomod(message, settings);
    } catch (error) {
      console.error("Error performing automod:", error);
    }
  }
};
