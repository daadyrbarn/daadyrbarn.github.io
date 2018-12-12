<<<<<<< HEAD
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
=======
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
>>>>>>> 384e9f9e4c44162d01fca37a14af9ae1586b6716
