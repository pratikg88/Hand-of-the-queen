// JavaScript source code
// JavaScript source code
/*
  This is the Game of thrones Conquest game bot. This will give you general information like NAP, War, etc.
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();



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
    
    message.channel.send(' Do not attack Lords they are Friendly \n Do not attack Hive because they are Murphys babies :stuck_out_tongue_winking_eye:');
	 }
	  // If the message is "!war"
  if (message.content === '!war') {
    
    message.channel.send('Burn the Torch :fire:');
	}
	  // If the message is "!help"
  if (message.content === '!help') {
    
    message.channel.send(' !R \n !nap \n !war');

  }
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the alliance, ${member}`);
});
// Log our bot in
client.login(process.env.BOT_TOKEN);
