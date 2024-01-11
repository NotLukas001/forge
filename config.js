require('dotenv').config();

module.exports = {
  BOT_TOKEN: const token = process.env.TOKEN;, // Your bot token from https://discord.com/developers/applications
  BOT_SECRET: "HWkNtjovwzzFJfPBCykPj_4GZlSHDjq6", // Your bot secret from https://discord.com/developers/applications
  MONGO_CONNECTION: "mongodb+srv://NotLukas:NotLukas1520@lukasidk.l0yu6ry.mongodb.net/", // MongoDB Atlas connection string https://www.mongodb.com/docs/atlas/app-services/
  OWNER_IDS: ["715678378614718564"], // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/RYQMVXuh4h", // Your bot support server
  WEBSITE: "https://lucy.is-a.fun",
  imageHELPMENU: "https://media.discordapp.net/attachments/1194817793175081090/1194817851098411068/image_2024-01-10_2033001911.jpg?ex=65b1bbd6&is=659f46d6&hm=6c2ea22aed1c493ad9daa15f62b39a19193cabaa3b4ca8b5c2ab71f9bad00ffc&=&format=webp&width=912&height=152",
  WEATHERSTACK_KEY: "YOUR_API_KEY", // Get one from https://weatherstack.com (optional) but features will be limited
  STRANGE_API_KEY: "YOUR_API_KEY", // Get one from https://strangeapi.com (optional) but features will be limited
  SPOTIFY_CLIENT_ID: "YOUR_CLIENT_ID", // Get one from https://developer.spotify.com/dashboard
  SPOTIFY_CLIENT_SECRET: "YOUR_CLIENT_SECRET", // Get one from https://developer.spotify.com/dashboard
  SESSION_PASSWORD: "your session password", // the password you want
  ERROR_LOGS: "https://discord.com/api/webhooks/1194812484243177572/YJCznlqq_5DywOpZQCmsEjQkaSeQYJ8eeCKxKY0hGNRihW45991hM9LXOvc3vK6a0N9S", // Your error logs webhook url
  JOIN_LEAVE_LOGS: "https://discord.com/api/webhooks/1194812484243177572/YJCznlqq_5DywOpZQCmsEjQkaSeQYJ8eeCKxKY0hGNRihW45991hM9LXOvc3vK6a0N9S", // Your join/leave logs webhook url

  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: "-", // Default prefix for the bot, use the env variable or fallback to "+"
  },

  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: true, // Should the interactions be registered globally
    TEST_GUILD_ID: "1153479197860311040", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },

  EMBED_COLORS: {
    BOT_EMBED: "#2b2d31",
    TRANSPARENT: "#2b2d31",
    SUCCESS: "#2b2d31",
    ERROR: "#2b2d31",
    WARNING: "#2b2d31",
  },
  
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Error! Try again later or contact L RMN",
  },

  // PLUGINS

  AUTOMOD: {
    ENABLED: true,
    LOG_EMBED: "#2b2d31",
    DM_EMBED: "#2b2d31",
  },

  // optional
  // If you enable the dashboard, configure it in your bot's developer settings and add the API/callback URI. For example: http://localhost:8080/api/callback
  DASHBOARD: {
    enabled: false,
    baseURL: "http://localhost:8080",
    failureURL: "http://localhost:8080",
    port: "8080",
  },

  ECONOMY: {
    ENABLED: true,
    CURRENCY: "$",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 10000, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "YT", // Default source for the music player YT, SC, YTM
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
      {
        host: "51.161.130.134",
        port: 10326,
        password: "madebytragic",
        id: "Main",
        secure: false,
      },
      // Add more lavalink nodes here
    ],
  },

  GIVEAWAYS: {
    ENABLED: true,
    REACTION: "🎁",
    START_EMBED: "#2b2d31",
    END_EMBED: "#2b2d31",
  },

  IMAGE: {
    ENABLED: true,
    BASE_API: "https://strangeapi.fun/api",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: true,
    EMBED_COLORS: {
      TIMEOUT: "#2b2d31",
      UNTIMEOUT: "#2b2d31",
      KICK: "#2b2d31",
      SOFTBAN: "#2b2d31",
      BAN: "#2b2d31",
      UNBAN: "#2b2d31",
      VMUTE: "#2b2d31",
      VUNMUTE: "#2b2d31",
      DEAFEN: "#2b2d31",
      UNDEAFEN: "#2b2d31",
      DISCONNECT: "#2b2d31",
      MOVE: "#2b2d31",
    },
  },

  PRESENCE: {
    ENABLED: true, // Whether or not the bot should update its status
    STATUS: "online", // The bot's status [online, idle, dnd, invisible]
    TYPE: "Watching", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "Forge Systems", // Your bot status message
  },

  STATS: {
    ENABLED: true,
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "Congratulations {member:mention}, on leveling up **Level {level}** . Keep up the fantastic progress!", // default message for level up
  },

  SUGGESTIONS: {
    ENABLED: true, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#2b2d31",
    APPROVED_EMBED: "#2b2d31",
    DENIED_EMBED: "#2b2d31",
  },

  TICKET: {
    ENABLED: true,
    CREATE_EMBED: "#2b2d31",
    CLOSE_EMBED: "#2b2d31",
  },
};
