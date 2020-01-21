// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Cleaner homes and pastures website',
		slug: 'cleaner-homes-website',
		img: 'cleaner.png',
		description: 'Website design and development for an agricultural spraying and house cleaning company.',
		myRole: 'I handled project management, client meetings, designing and developing independently',
		techUsed: [
			"Vue.js",
			"Nuxt.js",
			"storyblock CMS",
			"vuetify.css",
			"UXpin",
			"goprospero"
		],
		features: [
			"modern responsive design",
			"headless cms integration",
			"webhooks usage",
			"custom components"
		],
		learnings: [
			"keep refering to the main problem you are solving, alot of development time was wasted making features that i assumed would improve the project, but turned out unneccessary.",
			"work through projects one step at a time. I began developing before finishing the design of the website. as a result, i was tring to design on the fly with css. This made design choices very difficult because instead of dragging an element i had to edit its styles manually.",

		],
	},
	{
		title: 'Sonar',
		slug: 'sonar',
		img: 'sonar.PNG',
		description: 'Sonar is an app created to solve the problem of young adults (like myself) wanting to socialise without the use of alchohol. It lets you play hide and seek in real life with a twist.. taggers and players get abilities! Turning the childhood favourite game into a strategic and thrilling event.',
		myRole: 'over 3 months, I independently designed and developed Sonar from an idea to a working MVP.',
		techUsed: [
			"react.js",
			"redux.js",
			"firebase",
			"geofirestore",
			"grommet.css",
			"invision studio"
		],
		features: [
			"realtime geolocation online multiplayer functionality",
			"user authentication",
			"effective source control management"
		],
		learnings: [
			"Automated tests are a must have for a big project. It ensures new features can be added seamlessy without breaking what was alreay there.",
			"Breaking a project into tiny pieces makes it alot more manageable",
			"THERES ALWAYS A SOLTION. sometimes it took me days or over a week but i always found a solution. never give up.",
			"removing yourself from the workstation regularly can be very beneficial. I spent alot of time trying to figure out problems when the solution was staring me in the face. I just needed a clear mind to see it."
		],
	},
	{
		title: 'Polyglot',
		slug: 'polyglot',
		img: 'cleaner.png',
		description: '',
		myRole: '',
		techUsed: '',
		features: '',
		learnings: '',
	},

];

export default posts;
