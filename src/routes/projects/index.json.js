import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		img: post.img,
		description: post.description,
		myRole: post.myRole,
		techUsed: post.techUsed,
		features: post.features,
		learnings: post.learnings,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}