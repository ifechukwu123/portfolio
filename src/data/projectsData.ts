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
	},
];
