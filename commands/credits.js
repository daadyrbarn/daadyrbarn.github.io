const Discord = require('discord.js');

module.exports = {
	name: 'credits',
	description: 'Show bot credits.',
	execute(message, args) {
		const creditsEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('http://pokedraft.dk/')
			.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Some description here')
			.setThumbnail('https://vignette.wikia.nocookie.net/pkmnshuffle/images/e/e1/Slowbro.png')
			.addField('Regular field title', 'Regular field content text')
			.addBlankField()
			.addField('Inline field title', 'Inline field content here', true)
			.addField('Other inline field title', 'Other inline field content goes here', true)
			.setImage('https://vignette.wikia.nocookie.net/pkmnshuffle/images/c/c2/Venomoth.png')
			.setTimestamp()
			.setFooter('Footer text goes here', 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/0/01/Rhydon.png');

		message.channel.send(creditsEmbed);
	},
};
