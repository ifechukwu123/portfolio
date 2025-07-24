import reactIcon from "/public/icons/tools/react.svg?url";
import figmaIcon from "/public/icons/tools/figma.svg?url";
import gitIcon from "/public/icons/tools/git.svg?url";
import githubIcon from "/public/icons/tools/github.svg?url";
import htmlIcon from "/public/icons/tools/html5.svg?url";
import javascriptIcon from "/public/icons/tools/javascript.svg?url";
import nextjsIcon from "/public/icons/tools/nextjs.svg?url";
import nodejsIcon from "/public/icons/tools/nodejs.svg?url";
import pythonIcon from "/public/icons/tools/python.svg?url";
import tailwindIcon from "/public/icons/tools/tailwind.svg?url";
import typescriptIcon from "/public/icons/tools/typescript.svg?url";
import { StaticImageData } from "next/image";
import projectImage from "/public/images/project.png";

interface Project {
	id: number;
	name: string;
	slug: string; //for dynamic routing
	description: string;
	githubLink?: string;
	deployedLink?: string;
	image: StaticImageData;
	overview: string;
	features: Array<{ id: number; name: string; description: string }>;
	tools: Array<{ id: number; name: string; icon: StaticImageData }>;
	lessons: string;
}

export const ProjectsData: Project[] = [
	{
		id: 1,
		name: "System of Silk",
		slug: "system_of_silk",
		description: "Exclusive boxing workouts by Michael ‘Silk’ Olajide Jr.",
		deployedLink: "https://systemofsilk.com/",
		image: projectImage,
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		features: [
			{
				id: 1,
				name: "Responsive Design",
				description:
					"Adapts seamlessly to all screen sizes — mobile, tablet, and desktop.",
			},
			{
				id: 2,
				name: "Dynamic Routing",
				description:
					"Uses dynamic routes to generate pages based on content or user input (e.g. /projects/[slug]).",
			},
			{
				id: 3,
				name: "Dark Mode Support",
				description:
					"Automatically switches themes based on system settings or user toggle.",
			},
			{
				id: 4,
				name: "Search Functionality",
				description:
					"Allows users to filter or find content easily using keywords.",
			},
		],
		tools: [
			{ id: 1, name: "React", icon: reactIcon },
			{ id: 2, name: "HTML5", icon: htmlIcon },
			{ id: 3, name: "Javascript", icon: javascriptIcon },
		],
		lessons:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 2,
		name: "Beauty Bin",
		slug: "beauty_bin",
		description: "Track expiration date of makeup products",
		githubLink: "https://github.com/ifechukwu123/beauty-bin",
		image: projectImage,
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		features: [
			{
				id: 1,
				name: "Animated Interactions",
				description:
					"Smooth transitions and hover animations enhance user experience.",
			},
			{
				id: 2,
				name: "Accessibility Features",
				description:
					"Includes semantic HTML, keyboard navigation, and ARIA labels for inclusive design.",
			},
			{
				id: 3,
				name: "Form Validation",
				description:
					"Provides real-time feedback on user input with clear error messaging.",
			},
			{
				id: 4,
				name: "Modular Components",
				description:
					"Built with reusable and maintainable components for scalability.",
			},
		],
		tools: [
			{ id: 1, name: "Github", icon: githubIcon },
			{ id: 2, name: "Typescript", icon: typescriptIcon },
			{ id: 3, name: "Git", icon: gitIcon },
			{ id: 4, name: "Next.js", icon: nextjsIcon },
		],
		lessons:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 3,
		name: "Instock",
		slug: "instock",
		description: "Full-Stack inventory management system",
		githubLink: "https://github.com/ifechukwu123/InStock",
		image: projectImage,
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		features: [
			{
				id: 1,
				name: "Image Optimization",
				description:
					"Lazy loading and responsive images ensure fast performance.",
			},
			{
				id: 2,
				name: "404 Page Handling",
				description: "Custom error pages to handle invalid URLs gracefully.",
			},
			{
				id: 3,
				name: "Form Validation",
				description:
					"Provides real-time feedback on user input with clear error messaging.",
			},
			{
				id: 4,
				name: "Modular Components",
				description:
					"Built with reusable and maintainable components for scalability.",
			},
		],
		tools: [
			{ id: 1, name: "Tailwind", icon: tailwindIcon },
			{ id: 2, name: "Node.js", icon: nodejsIcon },
			{ id: 3, name: "Python", icon: pythonIcon },
			{ id: 4, name: "Figma", icon: figmaIcon },
		],
		lessons:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];
