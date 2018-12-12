const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'summary',
	description: 'Give a short summary of the league. Pip!',
	aliases: ['sum'],
	args: true,
	execute(message, args) {
		const indigoEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Indigo League Leaderboard')
			.setURL('https://docs.google.com/spreadsheets/d/1IfDET4jUZE5lPigO_dLKRaBADyVNiRQ0DjZ_B9Qwyo0')
			.setAuthor('Piplup', 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png', 'http://pokedraft.dk')
			.setDescription('This was the first season of Pokedraft Aarhus (then: "Valor Pokedraft"). Three groups of six players took on nine bosses while making up the rules as we went along.')
			.addField('Summary', 'Three trainers earned the title of Indigo League Champion claiming a badge as the prize.\nAll participants of this season earned the Indigo Leaguer badge.', true)
			.addField('Winners:', 'Division 1: **FranciscoISCO89**\nDivision 2: **BearBASH1**\nDivision 3: **FRYGTET**', true)
			.setTimestamp()
			.setFooter(`Use ${prefix}sheet to see the current season leaderboard.`);

		const orangeEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Orange League Leaderboard')
			.setURL('https://docs.google.com/spreadsheets/d/17FKNfuy6Lm1gf5iTTHEEst3zorAD0Obkbvfw-pUM41E')
			.setAuthor('Piplup', 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png', 'http://pokedraft.dk')
			.setDescription('This is the current season of Pokedraft Aarhus. Two dedicated groups are battling for rankings, while two casual groups are battling for fun!')
			.setThumbnail('https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png')
			.addField('Summary', 'No summary yet, we\'re still going!', true)
			.setTimestamp()
			.setFooter(`Use ${prefix}summary [league name] to see previous season stats.`);

		if (args[0] === 'indigo') {
			message.channel.send(indigoEmbed);
		}
		else {
			message.channel.send(orangeEmbed);
		}
	},
};
