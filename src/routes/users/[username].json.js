import users from './_users.js';

const lookup = new Map();
users.forEach(post => {
	lookup.set(post.username, JSON.stringify(post));
});

export function get(req, res, next) {
	const { username } = req.params;

	if (lookup.has(username)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		setTimeout(() => res.end(lookup.get(username)), 1000); // pretend to be doing something
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
