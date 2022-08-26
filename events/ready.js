module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.channels.cache.get(process.env.connected).send('Connected');
		client.user.setActivity('RC 2 | Slash Commands!');
	},
};