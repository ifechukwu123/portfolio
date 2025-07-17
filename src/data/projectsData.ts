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
}

export const ProjectsData: Project[] = [
	{
		id: 1,
		name: "System of Silk",
		slug: "system_of_silk",
		description: "Exclusive boxing workouts by Michael ‘Silk’ Olajide Jr.",
		deployedLink: "https://systemofsilk.com/",
		image: projectImage,
	},
	{
		id: 2,
		name: "Beauty Bin",
		slug: "beauty_bin",
		description: "Track expiration date of makeup products",
		githubLink: "https://github.com/ifechukwu123/beauty-bin",
		image: projectImage,
	},
	{
		id: 3,
		name: "Instock",
		slug: "instock",
		description: "Full-Stack inventory management system",
		githubLink: "https://github.com/ifechukwu123/InStock",
		image: projectImage,
	},
];
