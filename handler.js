'use strict';

require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

module.exports.weather = (event, context, callback) => {

  bot.login(TOKEN);

  bot.on('ready', () => {
    bot.channels.cache
      .get('698177265363714081')
      .send("Severe outlook for today. For more info regarding severe outlooks, see https://www.spc.noaa.gov/misc/about.html.", new Discord.MessageAttachment("https://www.spc.noaa.gov/public/cwa/images/OHX_swody1.png") );
  });
};







