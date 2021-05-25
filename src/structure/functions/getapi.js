const requestify = require('requestify');

exports.link = async (item, url) => {
	const x = await requestify.get(`https://some-random-api.ml/${item}/${url}`).then(function(response) {
		const resp = response.getBody().link;
		return resp;
	});
	return x;
};


exports.fact = async (item, url) => {
	const x = await requestify.get(`https://some-random-api.ml/${item}/${url}`).then(function(response) {
		const resp = response.getBody().fact;
		return resp;
	});
	return x;
};

exports.inspirobot = async () => {
	const x = await requestify.get('https://inspirobot.me/api?generate=true').then(function(response) {
		const resp = response.getBody();
		return resp;
	});
	return x;
};
