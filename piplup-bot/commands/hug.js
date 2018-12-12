module.exports = {
	name: 'hug',
	description: 'Want a hug?',
	args: true,
	execute(message, args) {
		if (args[0] === 'me') {
			message.react('🤗');
		}
		else {
			message.channel.send('!hug');
		}
	},
};
