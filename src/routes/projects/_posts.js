const posts = [
	{
		title: 'Cleaner homes website',
		slug: 'cleaner-homes-website',
		img: 'cleaner.png',
		description: 'Website design and development for an agricultural spraying and house cleaning company.',
		myRole: 'I handled project management, client meetings, designing and developing independently',
		techUsed: [
			"Vue.js",
			"Nuxt.js",
			"Storyblock CMS",
			"Vuetify.css",
			"UXpin",
			"Prospero"
		],
		features: [
			"Modern responsive design",
			"Headless cms integration",
			"Webhooks usage",
			"Custom components"
		],
		learnings: [
			"Keep refering to the main problem you are solving, alot of development time was wasted making features that i assumed would improve the project, but turned out unneccessary.",
			"Work through projects one step at a time. I began developing before finishing the design of the website. As a result, I was trying to design on the fly with css. This made design choices very difficult and inefficient.",

		],
		codeLink: "https://github.com/kawaiifreak97/cleaner-homes",
		liveLink: "https://quizzical-joliot-2438a6.netlify.com/"
	},
	{
		title: 'Sonar web-app',
		slug: 'sonar',
		img: 'sonar.PNG',
		description: 'I created sonar to show my friends we dont need alchohol to have fun. Its an app where you play hide and go seek (in real life) but players have abilities, making it alot more strategic and fun.',
		myRole: 'I independently designed and developed Sonar from an idea to a working MVP.',
		techUsed: [
			"React.js",
			"Redux.js",
			"Firebase",
			"Geofirestore",
			"Grommet.css",
			"Invision studio"
		],
		features: [
			"Realtime geolocation",
			"Online multiplayer functionality",
			"User authentication",
			"Effective source control management"
		],
		learnings: [
			"Time away from the code can be just as effective as time spent coding",
			"Automated tests are a must have for a big project. I used alot of time rewriting new features cause they broke the existing code",
			"THERES ALWAYS A SOLUTION. Sometimes it took me days, but you always find a way",
		],
		codeLink: "https://github.com/tamari-gray/Sonar-app",
		liveLink: "https://sonar-app.sonar-test.now.sh"
	}
];

export default posts;
