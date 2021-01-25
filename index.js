

const Config = require('./settings.json')
require('dotenv').config();
require('./keepAwake/awake.js')
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Successfully logged in!')
  client.user.setActivity(`${Config.prefix}help`, {type: "PLAYING"})
});

/*client.on('guildCreate', guild => {



  defaultChannel.send("Hey there! I'm Ponger; I'm a very simple Ping Pong bot.")
  const embed = new Discord.MessageEmbed()
    
    .setTitle('How do I work?')
      
    .setColor(0x50da86)
      
    .setDescription("Most of the things I do are automatic, there's only one command! If you ever wanted to use it, my prefix is `p/`")

    .addFields(
      {name: "Setup", value: "To set me up, create a channel with `ping-pong` in its name!"},
      {name: "Usage", value: "To use me, write **ping** or **Ping** in the **ping-pong** channel, I will send the ball back with **pong**! Let's see who will win :D"},
      {name: "Commands", value: `${Config.prefix}help`},
    )
    
    .setFooter("Ponger was created and is developed by CrazyCatzzz#6964")
    
  defaultChannel.send(embed);
});*/

client.on('message', message => {
  if (message.channel.name.includes('ping-pong')) {

    var playerLoseChance = Math.random();
    var botLoseChance = Math.random();
    var globalLoseChance = Math.random();

    if (message.content === `ping` || message.content === `Ping`) {
      
      if  (globalLoseChance >= 0.51) {
        
        if (botLoseChance >= 0.51) {
          message.channel.send(`${message.author}, I lost!`);

        } else if (playerLoseChance >= 0.51) {
          message.channel.send(`${message.author}, you lost!`);
        
        } else message.channel.send(`${message.author}, the ball exploded`);
      } else message.channel.send(`${message.author}, pong`);

    }
  };
  
  if (message.content.startsWith(Config.prefix) && message.content.includes("help")) {
    const embed = new Discord.MessageEmbed()
      
      .setTitle('How do I work?')
        
      .setColor(0x50da86)
        
      .setDescription("Most of the things I do are automatic, there's only one command! If you ever wanted to use it, my prefix is `p/`")

      .addFields(
        {name: "Setup", value: "To set me up, create a channel with `ping-pong` in its name!"},
        {name: "Usage", value: "To use me, write **ping** or **Ping** in the **ping-pong** channel, I will send the ball back with **pong**! Let's see who will win :D"},
        {name: "Commands", value: `${Config.prefix}help`},
      )
      
      .setFooter("Ponger was created and is developed by CrazyCatzzz#6964")
      
    message.channel.send(embed);
    }
});

client.login()