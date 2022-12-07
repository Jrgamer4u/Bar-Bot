module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity('RC 2 | Slash Commands!');
	},
};
