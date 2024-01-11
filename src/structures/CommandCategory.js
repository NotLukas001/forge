const config = require("@root/config");

module.exports = {
  ADMIN: {
    name: "Admin",
    emoji: "1168437171104010241",
  },
  AUTOMOD: {
    name: "Automod",
    enabled: config.AUTOMOD.ENABLED,
    emoji: "1168922086253809724",
  },
  ANIME: {
    name: "Anime",
    emoji: "1168924001956016229",
  },
  ECONOMY: {
    name: "Economy",
    enabled: config.ECONOMY.ENABLED,
    emoji: "1168923950458347671",
  },
  FUN: {
    name: "Fun",
    emoji: "1168923771567091863",
  },
  GIVEAWAY: {
    name: "Giveaway",
    enabled: config.GIVEAWAYS.ENABLED,
    emoji: "1168923928341794866",
  },
  IMAGE: {
    name: "Image",
    enabled: config.IMAGE.ENABLED,
    emoji: "1168436873220329522",
  },
  INVITE: {
    name: "Invite",
    enabled: config.INVITE.ENABLED,
    emoji: "1168454922543583263",
  },
  INFORMATION: {
    name: "Information",
    emoji: "1168436890081448058",
  },
  MODERATION: {
    name: "Moderation",
    enabled: config.MODERATION.ENABLED,
    emoji: "1168923981051592775",
  },
  MUSIC: {
    name: "Music",
    enabled: config.MUSIC.ENABLED,
    emoji: "1168436945169416352",
  },
  OWNER: {
    name: "Owner",
    emoji: "1168450071369617490",
  },
  SOCIAL: {
    name: "Social",
    emoji: "1168923808598593606",
  },
  STATS: {
    name: "Statistics",
    enabled: config.STATS.ENABLED,
    emoji: "1168923892308516976",
  },
  SUGGESTION: {
    name: "Suggestion",
    enabled: config.SUGGESTIONS.ENABLED,
    emoji: "1168923870590406706",
  },
  TICKET: {
    name: "Ticket",
    enabled: config.TICKET.ENABLED,
    emoji: "1168923832208334898",
  },
  UTILITY: {
    name: "Utility",
    emoji: "1168923849266573382",
  },
};
