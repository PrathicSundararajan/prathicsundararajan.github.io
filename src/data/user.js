const TAGS_DICT = {
	"HEALTH_SOFT_Gov" : ["Proposals","Health", "Government"],
	"HEALTH_SOFT_GT" : ["Proposals","Health", "GT"],
	"ML_NASA" : ["Data Science", "NASA"]
} 
var INFO = {
	main: {
		title: "My Portfolio",
		name: "Prathic Sundararajan",
		email: "me@prathic.com",
		logo: "../logo.png",
	},
	INDIV_TAGS : ["ALL", "Proposals","Health", "Government","Data Science", "NASA","GT"],
	curr_tag : "",
	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Prathic Sundararajan",
		description:
			"I am a software engineer that is interested in the application of technology in the following domains: healthcare, robotics and space. Additionally, I am also interested in applying data science methodologies within these domains.",
	},

	about: {
		title: "Prathic Sundararajan",
		description:
			"I've worked on a variety of projects over the years in various different domains. They all have something to do in some way or fashion with healthcare, technology or space. But in general, I enjoy working on cool projects with individuals who are passionate about the work. I enjoy participating in challenges and competitions because it allows me to learn about unique problems and gives me a chance to innovate and implement new solutions. If you're interested in any of the projects I've worked on, please feel free to check out the included details and reach out to me!",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "BEAMS | NIH",
			description:
				"Created a lesson plan intended for teachers of students in grade 6-8 that focused on concepts in Biomedical Engineering. Selected as a winner in the NIH Biomedical Engineering Challenge and awarded a $5,000 cash prize. ",
			logo: "./NIH_logo.png",
			linkText: "View Project",
			link: "https://github.com",
			tags: TAGS_DICT["HEALTH_SOFT_Gov"]
		},
		{
			title: "Bionic Pancreas | ARPA-H",
			description:
				"Developed a proposal based on current clinical research regarding a closed loop bionic pancreas system mainly focusing on Type 1 Diabetes. Made it quarterfinals in the Advanced Research Projects Agency for Health Dash Competition and awarded a $6,000 Cash Prize.",
			logo: "./ARPAH.png",
			linkText: "View Project",
			link: "/article/1",
			tags: TAGS_DICT["HEALTH_SOFT_Gov"]
		},
		
		{
			title: "Pushback to the Future | NASA",
			description:
				"Developed a ML Model that predicts pushback time at US airports. Also developed a federated learning variant of our approach. Placed 3rd in a competition held by NASA and awarded a $8,000 Cash Prize.",
			logo: "./NASA.png",
			linkText: "View Project",
			link: "https://github.com",
			tags: TAGS_DICT["ML_NASA"]
		},

		{	
			title: "Giving Blood & Plasma Innovation Challenge | HHS",
			description:
				"Developed a 3-pronged approach focused on improving blood donations that includes physical outreach, social media platforms, and data-driven ML. Selected as a winner in a challenge held by The Department of Health and Human Services and awarded a $10,000 Cash Prize.",
			logo: "./hhs.png",
			linkText: "View Project",
			link: "https://github.com",
			tags: TAGS_DICT["HEALTH_SOFT_Gov"]
		},

		{
			title: "Promoting Equity & Access | Georgia Tech ",
			description:
				"Wrote a proposal advocating for policy change on campus to help students with cognitive, speech and motor disabilities. Selected as a second place winner in the Student Innovation Competition by GT's College of Engineering's DEI Council and awarded a $1,000 Cash Prize.",
			logo: "./GT.png",
			linkText: "View Project",
			link: "https://github.com",
			tags: TAGS_DICT["HEALTH_SOFT_GT"]
		},
	],
};

export default INFO;
