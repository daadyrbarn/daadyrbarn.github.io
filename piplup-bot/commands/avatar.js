<<<<<<< HEAD
module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: 'Display an avatar.',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	},
};
=======
module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: 'Display an avatar.',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	},
};
>>>>>>> 384e9f9e4c44162d01fca37a14af9ae1586b6716
