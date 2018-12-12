const Discord = require('discord.js');

module.exports = {
	name: 'credits',
	description: 'Show bot credits.',
	execute(message, args) {
		const creditsEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('http://pokedraft.dk/')
			.setAuthor('Piplup', 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png', 'http://pokedraft.dk')
			.setDescription('Some description here')
			.setThumbnail('https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png')
			.addField('Regular field title', 'Regular field content text')
			.addBlankField()
			.addField('Inline field title', 'Inline field content here', true)
			.addField('Other inline field title', 'Other inline field content goes here', true)
			.setTimestamp()
			.setFooter('Footer text goes here', 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png');

		message.channel.send(creditsEmbed);
	},
};
