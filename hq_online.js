// JavaScript source code
// JavaScript source code
/*
  This is the Game of thrones Conquest game bot. This will give you general information like NAP, War, etc.
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const newUsers = [];

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Hand of the Queen at your Service!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "!R"
  if (message.content === '!R') {
    // Send "All Hail Queen Rella!!!" to the same channel
    message.channel.send('All Hail Queen Rella!!! :princess:');
	}
	  // If the message is "!nap"
  if (message.content === '!nap') {
    
    message.channel.send(':t Spainsh \n . \n Do not attack Lords they are Friendly \n . \n Do not attack Hive because they are Murphys babies :stuck_out_tongue_winking_eye: \n . \n We have temp NAP with Torch');
	 }
	  // If the message is "!war"
  if (message.content === '!war') {
    
    message.channel.send(':t Spainsh Check !nap before hitting anyone. Make a good choices :fire:');
	}
	  // If the message is "!help"
  if (message.content === '!help') {
    
    message.channel.send(':t Spainsh Use below keywords to get current information \n !R \n !nap \n !war');

  }
});

//Welcome new member
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage('Welcome to our alliance ${member.user}.').catch(console.error);
});

// Log our bot in
client.login(process.env.BOT_TOKEN);
