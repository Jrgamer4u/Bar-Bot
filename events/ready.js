module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity('/BB | Slash Commands!');
	},
};
