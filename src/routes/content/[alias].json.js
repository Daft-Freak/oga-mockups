import content from './_content.js';

const lookup = new Map();
content.forEach(post => {
	lookup.set(post.alias, JSON.stringify(post));
});

export function get(req, res, next) {
	const { alias } = req.params;

	if (lookup.has(alias)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(alias));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
