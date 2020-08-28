module.exports.run = async(client, message, args) => {
  let channel = message.member.voiceChannel;
  if (channel) {
    channel.join()
      .then(connection => { 
        message.channel.send('Connected to the channel!');
      })
      .catch();
  } else {
    message.reply('First join a voice channel!');
  }
}

module.exports.help = {
	name: 'join'
}
