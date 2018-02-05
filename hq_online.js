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
    
    message.channel.send('\n Do not attack Lords they are Friendly \n Do not attack Hive because they are Murphys babies :stuck_out_tongue_winking_eye: \n We have temp NAP with Torch');
	 }
	  // If the message is "!war"
  if (message.content === '!war') {
    
    message.channel.send('Check !nap before hitting anyone. Make a good choices :fire:');
	}
	  // If the message is "!help"
  if (message.content === '!help') {
    
    message.channel.send('\n !R \n !nap \n !war');

  }
});

//Welcome new member
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 1) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.get(guild.id).send("Welcome to our alliance \n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

// Log our bot in
client.login(process.env.BOT_TOKEN);
