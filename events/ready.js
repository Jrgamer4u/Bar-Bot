module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.channels.cache.get(process.env.connected).send('yo im onlin');
		client.user.setActivity('/BB | Slash Commands!');
	},
};