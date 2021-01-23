require('dotenv').config();
require('./keepAwake/awake.js')
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Successfully logged in!')
  client.user.setActivity("Ping Pong", {type: "PLAYING"})
});

client.on('guildCreate', () => {});

client.on('message', message => {
  if (message.channel.name.includes('ping-pong')) {

    var playerLoseChance = Math.random();
    var botLoseChance = Math.random();
    var globalLoseChance = Math.random();

    if (message.content === `ping`) {
      
      if  (globalLoseChance >= 0.51) {
        
        if (botLoseChance >= 0.51) {
          message.channel.send(`${message.author}, I lost!`);

        } else if (playerLoseChance >= 0.51) {
          message.channel.send(`${message.author}, you lost!`);
        
        } else message.channel.send(`${message.author}, the ball fucking exploded`);
      } else message.channel.send(`${message.author}, pong`);

    }
  };
  

});

client.login()