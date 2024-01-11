const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const { MESSAGES, EMBED_COLORS } = require("@root/config");

const axios = require('axios');


/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "lyric",
  description: "find lyric of the song",
  category: "MUSIC",
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: true,
    minArgsCount: 1,
    usage: "<Song Title - singer>",
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "query",
        type: ApplicationCommandOptionType.String,
        description: "find lyric of the song",
        required: true,
      },
    ],
  },

  async messageRun(message, args) {
    const choice = args.join(" ");
    if (!choice) {
      return message.safeReply("Invalid Lyric selected.");
    }
    const response = await getLyric(message.author, choice);
    return message.safeReply(response);
  },

  async interactionRun(interaction) {
    const choice = interaction.options.getString("query");
    const response = await getLyric(interaction.user, choice);
    await interaction.followUp(response);
  },
};

async function getLyric(user, choice) {
  try {
    const song = choice.replace(/ /g, "+");
    const response = await axios.get(`https://api.popcat.xyz/lyrics?song=${song}`);
    
    if (response.status !== 200) {
      return MESSAGES.API_ERROR;
    }

    const data = response.data;

    const thumbnail = data.thumbnail.genius;
    const author = data.author;
    const lyrics = data.lyrics;
    const title = data.title;

    const embed = new EmbedBuilder();
    embed
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setTitle(`${author} - ${title}`)
      .setThumbnail(thumbnail)
      .setDescription(lyrics)
      .setFooter({ text: `Requested By: ${user.username}` });

    return { embeds: [embed] };
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return MESSAGES.API_ERROR;
  }
}