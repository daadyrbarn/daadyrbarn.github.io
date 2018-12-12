<<<<<<< HEAD
module.exports = {
	name: 'args-info',
	description: 'List arguments.',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
=======
module.exports = {
	name: 'args-info',
	description: 'List arguments.',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
>>>>>>> 384e9f9e4c44162d01fca37a14af9ae1586b6716
